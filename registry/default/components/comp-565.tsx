"use client"

import React from "react";
import {
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import { ChevronDownIcon } from "lucide-react";

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

export default function Component() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
      selectedItems: ["components"],
    },
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  return (
    <div {...tree.getContainerProps()} className="flex flex-col gap-0.5">
      {tree.getItems().map((item) => {
        return (
          <button
            key={item.getId()}
            {...item.getProps()}
            style={{ '--tree-level': item.getItemMeta().level } as React.CSSProperties}
            data-focus={item.isFocused()}
            data-selected={item.isSelected()}
            data-folder={item.isFolder()}
            aria-expanded={item.isExpanded()}
            className="outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 ms-[calc(var(--tree-level)*1.5rem)] data-[folder=false]:ps-3 data-[folder=false]:ms-[calc(var(--tree-level)*1.5rem-0.25rem)] focus:z-10"
          >
              {item.isFolder() && (
                <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 in-aria-[expanded=false]:-rotate-90" />
              )}
              {item.getItemName()}
          </button>
        );
      })}
    </div>
  );
};