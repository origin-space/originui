// We'll use this file to create a headless tree component, with the following features:

// [x] data must be modelled like an object like this:

// {
//     id: '0',
//     label: 'Documents',
//     children: [
//         {
//             id: '1',
//             label: 'Work',
//             children: [
//                 { id: '2', label: 'Expenses.doc' },
//                 { id: '3', label: 'Resume.doc' }
//             ]
//         },
//         {
//             id: '4',
//             label: 'Home',
//         }
//     ]
// },

// [] checkbox support
// [] loading state for asynchronous data loading
// [] an item can be disabled
// [] Selection: single, multiple (with shift key), checkbox (with indeterminate state)
// [] supporting defaultExpandedIds and expandedIds separately for uncontrolled and controlled usage
// [] Events like onSelectionChange, onExpand, onCollapse, onSelect, onUnselect
// [] Drag and drop with Dnd kit (reorder and/or move to folder) [] ideally, we should add an option for 
// [] Search / filter
// [] Controlled (eg, I may want to expand / collapse from the outside)
// [] a renderNode prop to allow consumers to control the markup/UI inside each tree item? Thoughts?
// [] Accessibility (keyboard especially)
//
// We will proceed steps by steps, so don't delete or edit this comment, we'll use it as a reference to track progresses.
"use client"

import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  // We might add an 'isDisabled' prop later here as per spec
}

interface TreeProps {
  data: TreeNode[];
  expandBehavior?: 'icon' | 'item';
  // defaultExpandedIds?: string[]; // For uncontrolled expansion later
  // expandedIds?: string[];        // For controlled expansion later
  // onExpand?: (nodeId: string, isExpanded: boolean) => void; // Event handler later
}

interface TreeItemProps {
  node: TreeNode;
  expandedIds: Set<string>; // Pass the whole set
  onToggleExpand: (nodeId: string) => void;
  expandBehavior: 'icon' | 'item';
}

function TreeItem({ node, expandedIds, onToggleExpand, expandBehavior }: TreeItemProps) {
  const isExpanded = expandedIds.has(node.id);
  const hasChildren = node.children && node.children.length > 0;

  const handleItemClick = () => {    
    if (hasChildren) {
      onToggleExpand(node.id);
    }
    // Later, this click will also handle selection based on props
  };

  const handleIconClick = (event: React.MouseEvent) => {    
    event.stopPropagation(); // Prevent label click if icon is part of the same clickable area
    onToggleExpand(node.id);
  };

  return (
    <li 
      key={node.id} 
      role="treeitem" 
      aria-expanded={hasChildren ? isExpanded : undefined}
      // If expandBehavior is 'item', the whole li could be clickable in theory,
      // but current setup has click on span (label) and icon.
      // We might consolidate this later if the LI itself should capture the click for 'item' behavior.
    >
      <div
        className="flex items-center in-data-[expand-behaviour=item]:cursor-pointer"
        onClick={handleItemClick} 
      >
        {hasChildren && (
          <ChevronDownIcon 
            onClick={handleIconClick} 
            size={16}
          />
        )}
        <span>
          {node.label}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <ul role="group" className="ms-4"> 
          {node.children!.map(childNode => (
            <TreeItem 
              key={childNode.id} 
              node={childNode} 
              expandedIds={expandedIds} 
              onToggleExpand={onToggleExpand} 
              expandBehavior={expandBehavior}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Tree({ data, expandBehavior = 'item' }: TreeProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (nodeId: string) => {
    setExpandedIds(prevExpandedIds => {
      const newExpandedIds = new Set(prevExpandedIds);
      if (newExpandedIds.has(nodeId)) {
        newExpandedIds.delete(nodeId);
      } else {
        newExpandedIds.add(nodeId);
      }
      return newExpandedIds;
    });
  };

  return (
    <ul role="tree" data-expand-behaviour={expandBehavior}>
      {data.map(node => (
        <TreeItem 
          key={node.id} 
          node={node} 
          expandedIds={expandedIds} 
          onToggleExpand={toggleExpand} 
          expandBehavior={expandBehavior}
        />
      ))}
    </ul>
  );
}

export default Tree;