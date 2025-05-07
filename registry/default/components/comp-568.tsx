"use client"

import React from "react";
import {
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
  type ItemInstance,
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

interface RecursiveRenderProps {
  itemInstance: ItemInstance<Item>;
}

function TreeItem({ itemInstance }: RecursiveRenderProps) {
  if (!itemInstance) return null;

  const isFolder = itemInstance.isFolder();
  const isExpanded = itemInstance.isExpanded();
  const childrenInstances = itemInstance.getChildren();

  return (
    <React.Fragment>
      <button
        {...itemInstance.getProps()}
        data-focus={itemInstance.isFocused()}
        data-selected={itemInstance.isSelected()}
        data-folder={isFolder}
        aria-expanded={isExpanded}
        className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus:z-10"
      >
        {isFolder && (
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 in-aria-[expanded=false]:-rotate-90" />
        )}
        {itemInstance.getItemName()}
      </button>

      {isFolder && isExpanded && childrenInstances.length > 0 && (
        <div className="flex flex-col gap-0.5 ms-6 relative before:w-px before:h-full before:bg-border before:absolute before:-start-2 before:top-0">
          {childrenInstances.map(childInstance => (
            <TreeItem key={childInstance.getId()} itemInstance={childInstance} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

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

  const rootItemInstance = tree.getItemInstance("company");
  const rootChildrenInstances = rootItemInstance?.getChildren() ?? [];

  return (
    <div {...tree.getContainerProps()} className="flex flex-col gap-0.5">
      {rootChildrenInstances.map(childInstance => (
        <TreeItem key={childInstance.getId()} itemInstance={childInstance} />
      ))}
    </div>
  );
};