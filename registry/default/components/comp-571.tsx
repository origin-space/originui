"use client"

import React from "react";
import {
  hotkeysCoreFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import { FolderIcon, FileIcon, FolderOpenIcon } from "lucide-react";

interface Item {
  name: string;
  children?: string[];
}

const items: Record<string, Item> = {
  "company": { name: "Company", children: ["engineering", "marketing", "operations"] },
  "engineering": { name: "Engineering", children: ["frontend", "backend", "platform-team"] },
  "frontend": { name: "Frontend", children: ["design-system", "web-platform"] },
  "design-system": { name: "Design System", children: ["components", "tokens", "guidelines"] },
  "components": { name: "Components" },
  "tokens": { name: "Tokens" },
  "guidelines": { name: "Guidelines" },
  "web-platform": { name: "Web Platform" },
  "backend": { name: "Backend", children: ["apis", "infrastructure"] },
  "apis": { name: "APIs" },
  "infrastructure": { name: "Infrastructure" },
  "platform-team": { name: "Platform Team" },
  "marketing": { name: "Marketing", children: ["content", "seo"] },
  "content": { name: "Content" },
  "seo": { name: "SEO" },
  "operations": { name: "Operations", children: ["hr", "finance"] },
  "hr": { name: "HR" },
  "finance": { name: "Finance" },
};

const indent = 20;

export default function Component() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  });

  return (
    <div className="flex flex-col gap-2 h-full *:first:grow">
      <div>
        <Tree 
          className="relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))] before:-ms-1" 
          indent={indent}
          tree={tree}
        >
          {tree.getItems().map((item) => {
            return (
              <TreeItem
                key={item.getId()}
                item={item}
              >
                <TreeItemLabel className="relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:bg-background before:-z-10">            
                  <span className="flex items-center gap-2 -order-1 flex-1">
                    {item.isFolder() ? (
                      item.isExpanded() ? (
                        <FolderOpenIcon className="text-muted-foreground pointer-events-none size-4" />
                      ) : (
                        <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                      )
                    ) : (
                      <FileIcon className="text-muted-foreground pointer-events-none size-4" />
                    )}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            );
          })}
        </Tree>  
      </div>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Basic tree with caret icon on the right ∙{" "}
        <a
          href="https://github.com/origin-space/image-cropper"
          className="hover:text-foreground underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </p>          
    </div>
  );
};