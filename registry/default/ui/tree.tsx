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

import React, { useState, useCallback } from 'react';
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
  onSelectNode: (nodeId: string, mode: 'toggle' | 'replace' | 'addRange') => void; // Updated signature
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
  onSelectNode, // Updated signature
  selectionMode,
  selectedIds, // Receive the set
}: TreeItemProps) {
  const isNodeExpanded = expandedIds.has(node.id);
  const hasChildren = node.children && node.children.length > 0;

  const handleItemClick = (event: React.MouseEvent) => { 
    let selectionHandledByModifier = false;

    if (selectionMode === 'multiple') {
      if (event.shiftKey) {
        onSelectNode(node.id, 'addRange');
        selectionHandledByModifier = true;
      } else if (event.metaKey || event.ctrlKey) {
        onSelectNode(node.id, 'toggle');
        selectionHandledByModifier = true;
      }
    }

    if (!selectionHandledByModifier) {
      if (selectionMode === 'single' || selectionMode === 'multiple') {
        onSelectNode(node.id, 'replace');
      }
    }
    // TODO: Handle 'checkbox' selection later

    // Only proceed to expand/collapse if selection was NOT handled by a modifier key pressing
    if (hasChildren && expandBehavior === 'item' && !selectionHandledByModifier) {
      onToggleExpand(node.id);
    }
  };
  
  const handleIconClick = (event: React.MouseEvent) => {    
    event.stopPropagation(); 
    let selectionHandledByModifier = false;

    // Icon click might also participate in selection if expandBehavior is 'item'
    if (expandBehavior === 'item') {
      if (selectionMode === 'multiple') {
        if (event.shiftKey) {
          onSelectNode(node.id, 'addRange');
          selectionHandledByModifier = true;
        } else if (event.metaKey || event.ctrlKey) {
          onSelectNode(node.id, 'toggle');
          selectionHandledByModifier = true;
        }
      }
      if (!selectionHandledByModifier && (selectionMode === 'single' || selectionMode === 'multiple')){
        onSelectNode(node.id, 'replace');
      }
    }
    
    // Expansion is always handled by icon click, regardless of modifiers for selection above
    // unless a specific UX choice is made to prevent expansion when e.g. shift-clicking icon.
    // For now, icon click primarily toggles expansion.
    onToggleExpand(node.id);
    // If selection was also part of the icon click (due to expandBehavior='item'), it's already handled.
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
        <span className="select-none">
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
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null); // For Shift+Click anchor

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

  // Helper function to get flat list of visible node IDs
  // Using useCallback to potentially memoize if data/expandedIds don't change, though maybe overkill here
  const getVisibleNodeIds = useCallback((nodes: TreeNode[], currentExpandedIds: Set<string>): string[] => {
    let visibleIds: string[] = [];
    nodes.forEach(node => {
      visibleIds.push(node.id);
      if (currentExpandedIds.has(node.id) && node.children) {
        visibleIds = visibleIds.concat(getVisibleNodeIds(node.children, currentExpandedIds));
      }
    });
    return visibleIds;
  }, []); // Depends only on the function logic itself

  const handleSelectNode = (nodeId: string, mode: 'toggle' | 'replace' | 'addRange') => { 
    if (selectionMode === 'single') {
      setSelectedIds(new Set([nodeId]));
      setLastSelectedId(nodeId);
    } else if (selectionMode === 'multiple') {
      if (mode === 'replace') {
        setSelectedIds(new Set([nodeId]));
        setLastSelectedId(nodeId);
      } else if (mode === 'toggle') {
        setSelectedIds(prevSelectedIds => {
          const newSelectedIds = new Set(prevSelectedIds);
          if (newSelectedIds.has(nodeId)) {
            newSelectedIds.delete(nodeId);
            if (lastSelectedId === nodeId) setLastSelectedId(null);
          } else {
            newSelectedIds.add(nodeId);
            setLastSelectedId(nodeId);
          }
          return newSelectedIds;
        });
      } else if (mode === 'addRange') {
        if (lastSelectedId) {
          const visibleIds = getVisibleNodeIds(data, expandedIds);
          const anchorIndex = visibleIds.indexOf(lastSelectedId);
          const targetIndex = visibleIds.indexOf(nodeId);

          if (anchorIndex !== -1 && targetIndex !== -1) {
            const start = Math.min(anchorIndex, targetIndex);
            const end = Math.max(anchorIndex, targetIndex);
            const rangeIds = visibleIds.slice(start, end + 1);
            setSelectedIds(new Set(rangeIds)); // Replace selection with the range
          } else {
            // Anchor or target not visible, treat as replace
            setSelectedIds(new Set([nodeId]));
            setLastSelectedId(nodeId);
          }
        } else {
          // If no anchor, Shift+Click behaves like a normal click/replace
          setSelectedIds(new Set([nodeId]));
          setLastSelectedId(nodeId);
        }
      }
    }
    // TODO: Handle 'checkbox' later
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
          selectedIds={selectedIds} 
        />
      ))}
    </ul>
  );
}

export default Tree;