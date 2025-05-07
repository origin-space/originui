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
  selectionMode?: 'single' | 'multiple' | 'checkbox'; // Added selectionMode
  // defaultExpandedIds?: string[]; // For uncontrolled expansion later
  // expandedIds?: string[];        // For controlled expansion later
  // onExpand?: (nodeId: string, isExpanded: boolean) => void; // Event handler later
}

interface TreeItemProps {
  node: TreeNode;
  expandedIds: Set<string>; 
  onToggleExpand: (nodeId: string) => void;
  expandBehavior: 'icon' | 'item';
  // Selection related props
  isSelected: boolean; // This specific node's selection state
  onSelectNode: (nodeId: string) => void;
  selectionMode?: 'single' | 'multiple' | 'checkbox';
  selectedIds: Set<string>; // Pass the whole set for children
}

function TreeItem({
  node,
  expandedIds,
  onToggleExpand,
  expandBehavior,
  // Selection props
  isSelected,
  onSelectNode,
  selectionMode,
  selectedIds, // Receive the set
}: TreeItemProps) {
  const isNodeExpanded = expandedIds.has(node.id);
  const hasChildren = node.children && node.children.length > 0;

  const handleItemClick = () => {
    if (selectionMode === 'single') {
      onSelectNode(node.id);
    }
    if (hasChildren && expandBehavior === 'item') {
      onToggleExpand(node.id);
    }
  };
  
  const handleIconClick = (event: React.MouseEvent) => {    
    event.stopPropagation(); 
    onToggleExpand(node.id);
    if (selectionMode === 'single' && expandBehavior === 'item') {
      onSelectNode(node.id);
    }
  };

  return (
    <li 
      key={node.id} 
      role="treeitem" 
      aria-expanded={hasChildren ? isNodeExpanded : undefined}
      aria-selected={selectionMode && selectionMode !== 'checkbox' ? isSelected : undefined}
      className="[&[aria-selected=true]>div]:bg-accent"
    >
      <div
        className="flex items-center in-data-[expand-behaviour=item]:cursor-pointer" 
        onClick={handleItemClick} 
      >
        {hasChildren && (
          <button 
            type="button"
            onClick={handleIconClick} 
            aria-label={isNodeExpanded ? `Collapse ${node.label}` : `Expand ${node.label}`}
            className="mr-1 p-0.5 border-0 bg-transparent cursor-pointer"
          >
            <ChevronDownIcon 
              className={`transition-transform duration-100 ease-in-out ${isNodeExpanded ? 'rotate-0' : '-rotate-90'}`} 
              size={16}
            />
          </button>
        )}
        <span>
          {node.label}
        </span>
      </div>
      {hasChildren && isNodeExpanded && (
        <ul role="group" className="ms-4">
          {node.children!.map(childNode => (
            <TreeItem 
              key={childNode.id} 
              node={childNode} 
              expandedIds={expandedIds} 
              onToggleExpand={onToggleExpand} 
              expandBehavior={expandBehavior}
              // Correctly pass selection props for children
              isSelected={selectedIds.has(childNode.id)} // Determine child's selection status
              onSelectNode={onSelectNode}
              selectionMode={selectionMode}
              selectedIds={selectedIds} // Pass the set down for further recursion
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Tree({ data, expandBehavior = 'item', selectionMode }: TreeProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

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

  const handleSelectNode = (nodeId: string) => {
    if (selectionMode === 'single') {
      setSelectedIds(new Set([nodeId]));
    }
    // TODO: Handle 'multiple' and 'checkbox' later
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
          isSelected={selectedIds.has(node.id)} 
          onSelectNode={handleSelectNode}
          selectionMode={selectionMode}
          selectedIds={selectedIds} // Pass the set for children
        />
      ))}
    </ul>
  );
}

export default Tree;