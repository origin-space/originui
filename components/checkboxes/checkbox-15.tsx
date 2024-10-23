"use client";

import { Fragment } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxTree } from "@/components/checkbox-tree";

interface TreeNode {
  id: string;
  label: string;
  defaultChecked?: boolean;
  children?: TreeNode[];
}

const initialTree: TreeNode = {
  id: "natural-wonders",
  label: "Natural Wonders",
  children: [
    { id: "mountains", label: "Mountains", defaultChecked: true },
    {
      id: "waterfalls",
      label: "Waterfalls",
      children: [
        { id: "niagara", label: "Niagara Falls" },
        { id: "angel-falls", label: "Angel Falls", defaultChecked: true },
      ],
    },
    { id: "grand-canyon", label: "Grand Canyon" },
  ],
};

export default function Checkbox15() {
  return (
    <div className="space-y-3">
      <CheckboxTree
        tree={initialTree}
        renderNode={({ node, isChecked, onCheckedChange, children }) => (
          <Fragment key={node.id}>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={node.id}
                checked={isChecked}
                onCheckedChange={onCheckedChange}
              />
              <Label htmlFor={node.id}>{node.label}</Label>
            </div>
            {children && <div className="space-y-3 ms-6">{children}</div>}
          </Fragment>
        )}
      />
    </div>
  );
}
