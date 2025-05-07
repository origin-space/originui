"use client"

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { ChevronDownIcon } from 'lucide-react';

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  // We might add an 'isDisabled' prop later here as per spec
}

interface TreeProps {
  data: TreeNode[];
  expandTrigger?: 'icon' | 'item';
  selectionMode?: 'single' | 'multiple' | 'checkbox'; // Added selectionMode
  // defaultExpandedIds?: string[]; // For uncontrolled expansion later
  // expandedIds?: string[];        // For controlled expansion later
  // onExpand?: (nodeId: string, isExpanded: boolean) => void; // Event handler later
}

interface TreeItemProps {
  node: TreeNode;
  expandedIds: Set<string>; 
  onToggleExpand: (nodeId: string) => void;
  expandTrigger: 'icon' | 'item';
  // Selection related props
  isSelected: boolean; // This specific node's selection state
  onSelectNode: (nodeId: string, mode: 'toggle' | 'replace' | 'addRange' | 'checkbox', isChecked?: boolean) => void; // Updated signature
  selectionMode?: 'single' | 'multiple' | 'checkbox';
  selectedIds: Set<string>; // Pass the whole set for children
  isIndeterminate?: boolean; // Will be added in a future step for checkbox indeterminate state
  selectionStatesMap: Map<string, { isSelected: boolean; isIndeterminate: boolean }>; // Added selectionStatesMap
}

  /**
   * Renders a single tree item.
   * 
   * @param node The node to be rendered.
   * @param expandedIds Set of expanded node IDs.
   * @param onToggleExpand Function to call when the item's expansion state changes.
   * @param expandTrigger Whether the item's expansion state should be toggled on item click.
   * @param isSelected Whether the item is selected.
   * @param onSelectNode Function to call when the item's selection state changes.
   * @param selectionMode The selection mode of the tree.
   * @param selectedIds Set of selected node IDs.
   * @param isIndeterminate Whether the item's checkbox is in an indeterminate state.
   * @param selectionStatesMap A map of node IDs to their selection states.
   */
function TreeItem({
  node,
  expandedIds,
  onToggleExpand,
  expandTrigger,
  // Selection props
  isSelected,
  onSelectNode,
  selectionMode,
  selectedIds,
  isIndeterminate, 
  selectionStatesMap, // Added selectionStatesMap
}: TreeItemProps) {
  const isNodeExpanded = expandedIds.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const checkboxRef = useRef<HTMLInputElement>(null); // For indeterminate state

  useEffect(() => { // For indeterminate state
    if (checkboxRef.current && selectionMode === 'checkbox') {
      checkboxRef.current.indeterminate = isIndeterminate ?? false;
    }
  }, [isIndeterminate, selectionMode]);

  const handleItemClick = (event: React.MouseEvent) => { 
    if (selectionMode === 'checkbox') {
      if (expandTrigger === 'icon') {
        // When expandTrigger is 'icon', item click toggles the checkbox selection.
        // Expansion is handled by the icon itself.
        onSelectNode(node.id, 'checkbox', !isSelected);
      } else if (expandTrigger === 'item') {
        // For 'item' trigger, item click ONLY toggles expansion (if has children).
        // Checkbox selection is handled by direct click on the checkbox input.
        if (hasChildren) {
          onToggleExpand(node.id);
        }
      }
      return; // Stop further processing for other selection modes
    }

    // Existing logic for 'single' and 'multiple' selection modes
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

    if (hasChildren && expandTrigger === 'item' && !selectionHandledByModifier) {
      onToggleExpand(node.id);
    }
  };

  const handleIconClick = (event: React.MouseEvent) => {    
    event.stopPropagation(); 

    if (selectionMode === 'multiple' && (event.shiftKey || event.metaKey || event.ctrlKey)) {
      // Modifier key is pressed in multiple selection mode: PERFORM SELECTION, DO NOT EXPAND
      if (event.shiftKey) {
        onSelectNode(node.id, 'addRange');
      } else { // metaKey or ctrlKey
        onSelectNode(node.id, 'toggle');
      }
    } else {
      // No modifier key in multi-select, OR not in multi-select mode: PERFORM EXPANSION if applicable
      if (hasChildren) { 
          onToggleExpand(node.id);
      }
    }
    // If expandTrigger is 'item' and selectionMode is 'single' or 'multiple', 
    // the selection part is already covered by handleItemClick (which covers the icon area).
    // No explicit selection call needed here to avoid double-processing or conflicts with checkbox mode.
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectNode(node.id, 'checkbox', event.target.checked);
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
        className="flex items-center in-data-[expand-trigger=item]:cursor-pointer" 
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
        {!hasChildren && selectionMode === 'checkbox' && (
          // Placeholder for alignment when no icon but checkbox is present
          <span className="mr-1 p-0.5 opacity-0" style={{ width: '1.25rem' }} aria-hidden="true">
            <ChevronDownIcon size={16}/> {/* Same size as actual icon for spacing */}
          </span>
        )}        
        {selectionMode === 'checkbox' && (
          // se qui troveremo un modo per iniettare un component radix, dovremo anche fare in modo di passare gli attr aria-checked (mixed, true, false)
          <input 
            type="checkbox" 
            ref={checkboxRef} // Enable if needed for indeterminate state later
            checked={isSelected}
            onChange={handleCheckboxChange}
            onClick={(e) => e.stopPropagation()} // Prevent item click on div from firing
            aria-label={`Select ${node.label}`}
            className="mr-2" // Minimal styling
          />
        )}        
        <span className="select-none">
          {node.label}
        </span>
      </div>
      {hasChildren && isNodeExpanded && (
        <ul role="group" className="ms-4">
          {node.children!.map(childNode => {
            const childSelectionState = selectionStatesMap.get(childNode.id) ?? { isSelected: false, isIndeterminate: false };
            return (
              <TreeItem 
                key={childNode.id} 
                node={childNode} 
                expandedIds={expandedIds} 
                onToggleExpand={onToggleExpand} 
                expandTrigger={expandTrigger} // Pass down the actual expand trigger
                isSelected={childSelectionState.isSelected} 
                onSelectNode={onSelectNode}
                selectionMode={selectionMode}
                selectedIds={selectedIds} // Pass down for consistency, though child's state comes from map
                isIndeterminate={childSelectionState.isIndeterminate}
                selectionStatesMap={selectionStatesMap} // Pass the map down recursively
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

function Tree({ data, expandTrigger, selectionMode }: TreeProps) {
  // Determine actual expandTrigger based on selectionMode if not explicitly provided
  const actualExpandTrigger = expandTrigger ?? 
    (selectionMode === 'checkbox' || selectionMode === 'multiple' ? 'icon' : 'item');

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null); // For Shift+Click anchor

  // --- Start: Node mapping and descendant helpers ---
  const { nodeMap, parentIdMap } = useMemo(() => {
    const newParentIdMap = new Map<string, string>();
    const newNodeMap = new Map<string, TreeNode>();
    function buildMapsRecursive(nodes: TreeNode[], parentId?: string) {
      for (const node of nodes) {
        newNodeMap.set(node.id, node);
        if (parentId) {
          newParentIdMap.set(node.id, parentId);
        }
        if (node.children) {
          buildMapsRecursive(node.children, node.id);
        }
      }
    }
    buildMapsRecursive(data);
    return { nodeMap: newNodeMap, parentIdMap: newParentIdMap };
  }, [data]);

  const getAllDescendantIds = useCallback((nodeId: string, includeSelf = false): string[] => {
    const descendants: string[] = [];
    const node = nodeMap.get(nodeId);
    if (includeSelf) {
      descendants.push(nodeId);
    }
    function findDescendantsRecursive(currentNode: TreeNode) {
      if (currentNode.children) {
        for (const child of currentNode.children) {
          descendants.push(child.id);
          findDescendantsRecursive(child);
        }
      }
    }
    if (node) {
      findDescendantsRecursive(node);
    }
    return descendants;
  }, [nodeMap]);

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

  const getVisibleNodeIds = useCallback((nodes: TreeNode[], currentExpandedIds: Set<string>): string[] => {
    let visibleIds: string[] = [];
    nodes.forEach(node => {
      visibleIds.push(node.id);
      if (currentExpandedIds.has(node.id) && node.children) {
        visibleIds = visibleIds.concat(getVisibleNodeIds(node.children, currentExpandedIds));
      }
    });
    return visibleIds;
  }, []);

  // --- Start: Selection States (isSelected, isIndeterminate) Calculation ---
  const selectionStatesMap = useMemo(() => {
    const newSelectionStates = new Map<string, { isSelected: boolean; isIndeterminate: boolean }>();

    // Helper function to determine indeterminate state reliably
    function getIsIndeterminateRecursive(nodeId: string, currentSelectedIds: Set<string>, currentNodemap: Map<string, TreeNode>): boolean {
      const node = currentNodemap.get(nodeId);

      // If the node itself is selected, it cannot be indeterminate.
      if (currentSelectedIds.has(nodeId)) {
        return false;
      }

      // If the node has no children, it cannot be indeterminate.
      if (!node || !node.children || node.children.length === 0) {
        return false;
      }

      let hasSelectedChild = false;
      let hasUnselectedChildOrIndeterminateChild = false; 

      for (const child of node.children) {
        const childIsSelected = currentSelectedIds.has(child.id);
        // Recursively call for the child's indeterminate status
        const childIsIndeterminate = getIsIndeterminateRecursive(child.id, currentSelectedIds, currentNodemap);

        if (childIsSelected) {
          hasSelectedChild = true;
        }
        // An unselected child OR an indeterminate child makes the parent potentially indeterminate
        if (!childIsSelected || childIsIndeterminate) { 
          hasUnselectedChildOrIndeterminateChild = true;
        }

        // Optimization: if we already found both conditions for indeterminacy, no need to check further children
        if (hasSelectedChild && hasUnselectedChildOrIndeterminateChild) {
          return true;
        }
      }
      // A node is indeterminate if it has at least one selected child AND
      // (at least one other child is unselected OR at least one child is indeterminate).
      return hasSelectedChild && hasUnselectedChildOrIndeterminateChild;
    }

    nodeMap.forEach(node => {
      const isSelected = selectedIds.has(node.id);
      // A node is indeterminate only if it's NOT selected itself, but its children's states make it so.
      const isIndeterminate = !isSelected ? getIsIndeterminateRecursive(node.id, selectedIds, nodeMap) : false;
      newSelectionStates.set(node.id, { isSelected, isIndeterminate });
    });

    return newSelectionStates;
  }, [selectedIds, nodeMap, data]); // Removed parentIdMap as it's not directly used in this refined calculation
  // --- End: Selection States Calculation ---

  const handleSelectNode = (nodeId: string, mode: 'toggle' | 'replace' | 'addRange' | 'checkbox', isChecked?: boolean) => { 
    if (selectionMode === 'checkbox' && mode === 'checkbox') {
      const descendantIds = getAllDescendantIds(nodeId, true); // include self
      const newSelectedIds = new Set(selectedIds);

      if (isChecked) {
        descendantIds.forEach(id => newSelectedIds.add(id));
      } else {
        descendantIds.forEach(id => newSelectedIds.delete(id));
      }

      // Upward cascade: Update parents based on children's state
      let currentParentId = parentIdMap.get(nodeId);
      while (currentParentId) {
        const parentNode = nodeMap.get(currentParentId);
        if (parentNode && parentNode.children) {
          const allChildrenSelected = parentNode.children.every(child => newSelectedIds.has(child.id));
          if (allChildrenSelected) {
            newSelectedIds.add(currentParentId);
          } else {
            newSelectedIds.delete(currentParentId); // If not all children are selected, parent cannot be selected
          }
        }
        currentParentId = parentIdMap.get(currentParentId);
      }
      setSelectedIds(newSelectedIds);
      setLastSelectedId(nodeId); // Keep track of the last interaction
    } else if (selectionMode === 'single' && (mode === 'replace' || mode === 'toggle')) { // Ensure mode is appropriate for single select
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
            setSelectedIds(new Set(rangeIds)); 
          } else {
            setSelectedIds(new Set([nodeId]));
            setLastSelectedId(nodeId);
          }
        } else {
          setSelectedIds(new Set([nodeId]));
          setLastSelectedId(nodeId);
        }
      }
    }
    // Note: The original 'TODO: Handle 'checkbox' later' in the previous version of this function 
    // is now addressed by the 'selectionMode === 'checkbox' && mode === 'checkbox'' block above.
  };

  return (
    <ul role="tree" data-expand-trigger={actualExpandTrigger}>
      {data.map(node => {
        const selectionState = selectionStatesMap.get(node.id) ?? { isSelected: false, isIndeterminate: false };
        return (
          <TreeItem 
            key={node.id} 
            node={node} 
            expandedIds={expandedIds} 
            onToggleExpand={toggleExpand} 
            expandTrigger={actualExpandTrigger} // Pass the calculated trigger
            isSelected={selectionState.isSelected} 
            onSelectNode={handleSelectNode}
            selectionMode={selectionMode}
            selectedIds={selectedIds} // Still needed for TreeItem's children processing
            isIndeterminate={selectionState.isIndeterminate}
            selectionStatesMap={selectionStatesMap} // Pass the map to top-level items
          />
        );
      })}
    </ul>
  );
}

export default Tree;