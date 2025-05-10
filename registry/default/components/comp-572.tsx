"use client"

import React, { useState } from "react";
import {
  hotkeysCoreFeature,
  renamingFeature,
  selectionFeature,
  syncDataLoaderFeature,
  type FeatureImplementation,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import { FolderIcon, FolderOpenIcon, FileIcon } from "lucide-react";
import { Input } from "@/registry/default/ui/input";

interface Item {
  name: string;
  children?: string[];
}

// Initial data
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
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    onRename: (item, newName) => {
      // Update the item name in our state
      const itemId = item.getId();
      setItems(prevItems => ({
        ...prevItems,
        [itemId]: {
          ...prevItems[itemId],
          name: newName,
        },
      }));
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature, renamingFeature, selectionFeature],
  });

  return (
    <div className="flex flex-col gap-2 h-full *:first:grow">
      <Tree indent={indent} tree={tree}>
        {tree.getItems().map((item) => {
          return (
            <TreeItem
              key={item.getId()}
              item={item}
            >
              <TreeItemLabel>
                <span className="flex items-center gap-2">
                  {item.isFolder() ? (
                    item.isExpanded() ? (
                      <FolderOpenIcon className="text-muted-foreground pointer-events-none size-4" />
                    ) : (
                      <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                    )
                  ) : (
                    <FileIcon className="text-muted-foreground pointer-events-none size-4" />
                  )}
                  {item.isRenaming() ?
                    (
                      <Input
                        {...item.getRenameInputProps()}
                        autoFocus
                        className="h-6 px-1 -my-0.5"
                      />
                    ) : (
                      item.getItemName()
                    )}
                </span>
              </TreeItemLabel>
            </TreeItem>
          );
        })}
      </Tree>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Tree with renaming (press F2 to rename) ∙{" "}
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