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
  // ARIA positional attributes
  levelSize?: number;
  itemIndex?: number;
  // Keyboard navigation & focus
  focusableId: string | null;
  setFocusableId: (id: string | null) => void;
  itemRef?: (element: HTMLLIElement | null) => void;
  registerNodeRef: (id: string, el: HTMLLIElement | null) => void; // Added to pass down ref registration
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
   * @param levelSize The size of the current level.
   * @param itemIndex The index of the item in the current level.
   * @param focusableId The ID of the currently focusable item.
   * @param setFocusableId Function to set the focusable ID.
   * @param itemRef Optional ref callback for the item.
   * @param registerNodeRef Function to register the node ref.
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
  // ARIA positional attributes
  levelSize,
  itemIndex,
  // Keyboard navigation & focus
  focusableId,
  setFocusableId,
  itemRef,
  registerNodeRef, // Added
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
    setFocusableId(node.id);
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
    setFocusableId(node.id);
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
    setFocusableId(node.id);
    onSelectNode(node.id, 'checkbox', event.target.checked);
  };

  return (
    <li 
      key={node.id} 
      ref={itemRef} // For focus management. itemRef is already (el) => registerNodeRef(node.id, el)
      role="treeitem" 
      tabIndex={node.id === focusableId ? 0 : -1} // Roving tabindex
      aria-expanded={hasChildren ? isNodeExpanded : undefined}
      aria-selected={selectionMode && selectionMode !== 'checkbox' ? isSelected : undefined}
      aria-setsize={levelSize}
      aria-posinset={itemIndex}
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
            tabIndex={-1}
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
            tabIndex={-1}
          />
        )}        
        <span className="select-none">
          {node.label}
        </span>
      </div>
      {hasChildren && isNodeExpanded && (
        <ul role="group" className="ms-4">
          {node.children!.map((childNode, childIndex) => { 
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
                levelSize={node.children!.length} // Pass levelSize for children
                itemIndex={childIndex + 1} // Pass itemIndex for children (1-based)
                focusableId={focusableId} // Pass focusableId down
                setFocusableId={setFocusableId} // Pass setFocusableId down
                itemRef={(el: HTMLLIElement | null) => registerNodeRef(childNode.id, el)} // Use passed registerNodeRef for children
                registerNodeRef={registerNodeRef} // Pass down registerNodeRef
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
  const [focusableId, setFocusableId] = useState<string | null>(null); // For roving tabindex
  const nodeRefs = useRef(new Map<string, HTMLLIElement | null>()); // To store refs to LI elements

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

  // Function to get all descendant IDs, needed for checkbox selection logic
  const getAllDescendantIds = useCallback((nodeId: string, includeSelf = false): string[] => {
    const descendants: string[] = [];
    const currentProcessingNode = nodeMap.get(nodeId); // Renamed to avoid conflict with 'node' prop in TreeItem
    if (includeSelf && currentProcessingNode) {
      descendants.push(nodeId);
    }
    function findDescendantsRecursive(n: TreeNode) { // Renamed param to avoid conflict
      if (n.children) {
        for (const child of n.children) {
          descendants.push(child.id);
          findDescendantsRecursive(child);
        }
      }
    }
    if (currentProcessingNode) {
      findDescendantsRecursive(currentProcessingNode);
    }
    return descendants;
  }, [nodeMap]);

  const getVisibleNodeIds = useCallback((nodesToScan: TreeNode[], currentExpandedIds: Set<string>): string[] => { // Renamed 'nodes' param
    let visibleIds: string[] = [];
    nodesToScan.forEach(n => { // Renamed 'node' param
      visibleIds.push(n.id);
      if (currentExpandedIds.has(n.id) && n.children) {
        visibleIds = visibleIds.concat(getVisibleNodeIds(n.children, currentExpandedIds));
      }
    });
    return visibleIds;
  }, []);

  useEffect(() => {
    // Initialize or update focusableId if data changes or current focusableId becomes invalid
    const visibleIds = getVisibleNodeIds(data, expandedIds);
    if (visibleIds.length > 0) {
      if (!focusableId || !visibleIds.includes(focusableId)) {
        setFocusableId(visibleIds[0]);
      }
    } else {
      setFocusableId(null);
    }
  }, [data, expandedIds, focusableId, getVisibleNodeIds]); // Re-run if data or expansion changes

  useEffect(() => {
    // Focus the element when focusableId changes
    if (focusableId) {
      const elementToFocus = nodeRefs.current.get(focusableId);
      elementToFocus?.focus();
    }
  }, [focusableId]);

  // Callback to register node refs, passed down to TreeItem
  const registerNodeRef = useCallback((id: string, el: HTMLLIElement | null) => {
    if (el) {
      nodeRefs.current.set(id, el);
    } else {
      nodeRefs.current.delete(id);
    }
  }, []);

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

  const handleSelectNode = (nodeId: string, mode: 'toggle' | 'replace' | 'addRange' | 'checkbox', isChecked?: boolean) => { 
    // Ensure focusableId is updated when a node is selected programmatically or via interaction
    // This might already be handled by individual click handlers, but good for programmatic changes too.
    if (nodeMap.has(nodeId)) { // Check if node is valid before setting focus
        setFocusableId(nodeId);
    }

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (!focusableId) return;
    const currentFocusedNode = nodeMap.get(focusableId);
    if (!currentFocusedNode) return;

    let preventDefault = true;

    switch (event.key) {
      case 'ArrowDown': {
        const visibleIds = getVisibleNodeIds(data, expandedIds);
        const currentIndex = visibleIds.indexOf(focusableId);
        if (currentIndex < visibleIds.length - 1) {
          setFocusableId(visibleIds[currentIndex + 1]);
        }
        break;
      }
      case 'ArrowUp': {
        const visibleIds = getVisibleNodeIds(data, expandedIds);
        const currentIndex = visibleIds.indexOf(focusableId);
        if (currentIndex > 0) {
          setFocusableId(visibleIds[currentIndex - 1]);
        }
        break;
      }
      case 'ArrowRight': {
        if (currentFocusedNode.children && currentFocusedNode.children.length > 0) {
          if (!expandedIds.has(focusableId)) {
            toggleExpand(focusableId); // Expand if collapsed
          } else {
            setFocusableId(currentFocusedNode.children[0].id); // Move to first child if expanded
          }
        }
        break;
      }
      case 'ArrowLeft': {
        if (currentFocusedNode.children && currentFocusedNode.children.length > 0 && expandedIds.has(focusableId)) {
          toggleExpand(focusableId); // Collapse if expanded
        } else {
          const parentId = parentIdMap.get(focusableId);
          if (parentId) {
            setFocusableId(parentId); // Move to parent if collapsed or leaf
          }
        }
        break;
      }
      case 'Enter':
      case ' ':
        if (selectionMode === 'checkbox'){
          const currentSelectionState = selectionStatesMap.get(focusableId);
          handleSelectNode(focusableId, 'checkbox', !(currentSelectionState?.isSelected));
        } else if (selectionMode === 'single') {
          handleSelectNode(focusableId, 'replace');
        } else if (selectionMode === 'multiple'){
          handleSelectNode(focusableId, 'toggle');
        }
        // If not selectable, space/enter might still expand/collapse as per some patterns, but ARIA spec focuses on selection.
        break;
      default:
        preventDefault = false;
        break;
    }
    if (preventDefault) {
      event.preventDefault();
    }
  };

  return (
    <ul role="tree" data-expand-trigger={actualExpandTrigger} onKeyDown={handleKeyDown}>
      {data.map((node, index) => { 
        const selectionState = selectionStatesMap.get(node.id) ?? { isSelected: false, isIndeterminate: false };
        return (
          <TreeItem 
            key={node.id} 
            node={node} 
            expandedIds={expandedIds} 
            onToggleExpand={toggleExpand} 
            expandTrigger={actualExpandTrigger} 
            isSelected={selectionState.isSelected} 
            onSelectNode={handleSelectNode}
            selectionMode={selectionMode}
            selectedIds={selectedIds} 
            isIndeterminate={selectionState.isIndeterminate}
            selectionStatesMap={selectionStatesMap} 
            levelSize={data.length} 
            itemIndex={index + 1} 
            focusableId={focusableId}
            setFocusableId={setFocusableId}
            itemRef={(el: HTMLLIElement | null) => registerNodeRef(node.id, el)} // Register top-level item's ref
            registerNodeRef={registerNodeRef} // Pass down the function for children to use
          />
        );
      })}
    </ul>
  );
}

export default Tree;