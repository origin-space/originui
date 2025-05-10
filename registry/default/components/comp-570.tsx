"use client"

import React, { useState } from "react";
import {
  dragAndDropFeature,
  hotkeysCoreFeature,
  keyboardDragAndDropFeature,
  selectionFeature,
  syncDataLoaderFeature,
  createOnDropHandler,
} from "@headless-tree/core";
import { useTree, AssistiveTreeDescription } from "@headless-tree/react";
import { Tree, TreeItem, TreeItemLabel, TreeDragLine } from "@/registry/default/ui/tree";
import { FolderIcon } from "lucide-react";

interface Item {
  name: string;
  children?: string[];
}

const initialItems: Record<string, Item> = {
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
  const [items, setItems] = useState(initialItems);
  
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
      selectedItems: ["components"],
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    canReorder: true,
    onDrop: createOnDropHandler((parentItem, newChildrenIds) => {
      setItems(prevItems => ({
        ...prevItems,
        [parentItem.getId()]: {
          ...prevItems[parentItem.getId()],
          children: newChildrenIds,
        },
      }));
    }),    
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature, dragAndDropFeature,keyboardDragAndDropFeature],
  });

  return (
    <div className="flex flex-col gap-2 h-full *:first:grow">
      <Tree indent={indent} tree={tree}>
        <AssistiveTreeDescription tree={tree} />
        {tree.getItems().map((item) => {
          return (
            <TreeItem
              key={item.getId()}
              item={item}
            >
              <TreeItemLabel>
                <span className="flex items-center gap-2">
                  {item.isFolder() && (
                    <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                  )}
                  {item.getItemName()}
                </span>
              </TreeItemLabel>
            </TreeItem>
          );
        })}
        <TreeDragLine />
      </Tree>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Tee with multi-select and drag and drop ∙{" "}
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