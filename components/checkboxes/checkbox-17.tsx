"use client";

import { CheckboxTree } from "@/components/checkbox-tree";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Fragment } from "react";

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

export default function Checkbox17() {
  return (
    <div className="space-y-3">
      <CheckboxTree
        tree={initialTree}
        renderNode={({ node, isChecked, onCheckedChange, children }) => (
          <Fragment key={node.id}>
            <div className="flex items-center gap-2">
              <Checkbox id={node.id} checked={isChecked} onCheckedChange={onCheckedChange} />
              <Label htmlFor={node.id}>{node.label}</Label>
            </div>
            {children && <div className="ms-6 space-y-3">{children}</div>}
          </Fragment>
        )}
      />
    </div>
  );
}
