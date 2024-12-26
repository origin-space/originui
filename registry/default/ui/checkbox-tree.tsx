/**
 * IMPORTANT: This component was built for demo purposes only and has not been tested in production.
 * It serves as a proof of concept for a checkbox tree implementation.
 * If you&lsquo;re interested in collaborating to create a more robust, production-ready
 * headless component, your contributions are welcome!
 */

"use client";

import React, { useCallback, useMemo, useState } from "react";

interface TreeNode {
  id: string;
  label: string;
  defaultChecked?: boolean;
  children?: TreeNode[];
}

function useCheckboxTree(initialTree: TreeNode) {
  const initialCheckedNodes = useMemo(() => {
    const checkedSet = new Set<string>();
    const initializeCheckedNodes = (node: TreeNode) => {
      if (node.defaultChecked) {
        checkedSet.add(node.id);
      }
      node.children?.forEach(initializeCheckedNodes);
    };
    initializeCheckedNodes(initialTree);
    return checkedSet;
  }, [initialTree]);

  const [checkedNodes, setCheckedNodes] = useState<Set<string>>(initialCheckedNodes);

  const isChecked = useCallback(
    (node: TreeNode): boolean | "indeterminate" => {
      if (!node.children) {
        return checkedNodes.has(node.id);
      }

      const childrenChecked = node.children.map((child) => isChecked(child));
      if (childrenChecked.every((status) => status === true)) {
        return true;
      }
      if (childrenChecked.some((status) => status === true || status === "indeterminate")) {
        return "indeterminate";
      }
      return false;
    },
    [checkedNodes],
  );

  const handleCheck = useCallback(
    (node: TreeNode) => {
      const newCheckedNodes = new Set(checkedNodes);

      const toggleNode = (n: TreeNode, check: boolean) => {
        if (check) {
          newCheckedNodes.add(n.id);
        } else {
          newCheckedNodes.delete(n.id);
        }
        n.children?.forEach((child) => toggleNode(child, check));
      };

      const currentStatus = isChecked(node);
      const newCheck = currentStatus !== true;

      toggleNode(node, newCheck);
      setCheckedNodes(newCheckedNodes);
    },
    [checkedNodes, isChecked],
  );

  return { isChecked, handleCheck };
}

interface CheckboxTreeProps {
  tree: TreeNode;
  renderNode: (props: {
    node: TreeNode;
    isChecked: boolean | "indeterminate";
    onCheckedChange: () => void;
    children: React.ReactNode;
  }) => React.ReactNode;
}

export function CheckboxTree({ tree, renderNode }: CheckboxTreeProps) {
  const { isChecked, handleCheck } = useCheckboxTree(tree);

  const renderTreeNode = (node: TreeNode): React.ReactNode => {
    const children = node.children?.map(renderTreeNode);

    return renderNode({
      node,
      isChecked: isChecked(node),
      onCheckedChange: () => handleCheck(node),
      children,
    });
  };

  return renderTreeNode(tree);
}
