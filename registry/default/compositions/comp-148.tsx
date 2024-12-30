"use client";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { CheckboxTree } from "@/registry/default/ui/checkbox-tree";
import { Label } from "@/registry/default/ui/label";
import { Fragment, useId } from "react";

interface TreeNode {
  id: string;
  label: string;
  defaultChecked?: boolean;
  children?: TreeNode[];
}

const initialTree: TreeNode = {
  id: "1",
  label: "Natural Wonders",
  children: [
    { id: "2", label: "Mountains", defaultChecked: true },
    {
      id: "3",
      label: "Waterfalls",
      children: [
        { id: "4", label: "Niagara Falls" },
        { id: "5", label: "Angel Falls", defaultChecked: true },
      ],
    },
    { id: "6", label: "Grand Canyon" },
  ],
};

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-3">
      <CheckboxTree
        tree={initialTree}
        renderNode={({ node, isChecked, onCheckedChange, children }) => (
          <Fragment key={`${id}-${node.id}`}>
            <div className="flex items-center gap-2">
              <Checkbox
                id={`${id}-${node.id}`}
                checked={isChecked}
                onCheckedChange={onCheckedChange}
              />
              <Label htmlFor={`${id}-${node.id}`}>{node.label}</Label>
            </div>
            {children && <div className="ms-6 space-y-3">{children}</div>}
          </Fragment>
        )}
      />
    </div>
  );
}
