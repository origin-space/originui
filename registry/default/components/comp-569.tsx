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
import { cn } from "@/registry/default/lib/utils";
import { RiImageLine, RiReactjsLine, RiBracesLine, RiCodeSSlashLine, RiFileTextLine, RiFileLine } from "@remixicon/react";

interface Item {
  name: string;
  children?: string[];
  fileExtension?: string;
}

const items: Record<string, Item> = {
  "app": { name: "app", children: ["app/layout.tsx", "app/page.tsx", "app/(dashboard)", "app/api"] },
  "app/layout.tsx": { name: "layout.tsx", fileExtension: "tsx" },
  "app/page.tsx": { name: "page.tsx", fileExtension: "tsx" },
  "app/(dashboard)": { name: "(dashboard)", children: ["app/(dashboard)/dashboard"] },
  "app/(dashboard)/dashboard": { name: "dashboard", children: ["app/(dashboard)/dashboard/page.tsx"] },
  "app/(dashboard)/dashboard/page.tsx": { name: "page.tsx", fileExtension: "tsx" },
  "app/api": { name: "api", children: ["app/api/hello"] },
  "app/api/hello": { name: "hello", children: ["app/api/hello/route.ts"] },
  "app/api/hello/route.ts": { name: "route.ts", fileExtension: "ts" },
  "components": { name: "components", children: ["components/button.tsx", "components/card.tsx"] },
  "components/button.tsx": { name: "button.tsx", fileExtension: "tsx" },
  "components/card.tsx": { name: "card.tsx", fileExtension: "tsx" },
  "lib": { name: "lib", children: ["lib/utils.ts"] },
  "lib/utils.ts": { name: "utils.ts", fileExtension: "ts" },
  "public": { name: "public", children: ["public/favicon.ico", "public/vercel.svg"] },
  "public/favicon.ico": { name: "favicon.ico", fileExtension: "ico" },
  "public/vercel.svg": { name: "vercel.svg", fileExtension: "svg" },
  "package.json": { name: "package.json", fileExtension: "json" },
  "tailwind.config.ts": { name: "tailwind.config.ts", fileExtension: "ts" },
  "tsconfig.json": { name: "tsconfig.json", fileExtension: "json" },
  "next.config.mjs": { name: "next.config.mjs", fileExtension: "mjs" },
  "README.md": { name: "README.md", fileExtension: "md" },
  "root": { name: "Project Root", children: ["app", "components", "lib", "public", "package.json", "tailwind.config.ts", "tsconfig.json", "next.config.mjs", "README.md"] },
};

// Helper function to get icon based on file extension
function getFileIcon(extension: string | undefined, className: string) {
  switch (extension) {
    case "tsx":
    case "jsx":
      return <RiReactjsLine className={className} />;
    case "ts":
    case "js":
    case "mjs":
      return <RiCodeSSlashLine className={className} />; // Lucide JS/TS icon
    case "json":
      return <RiBracesLine className={className} />; // Lucide JSON icon
    case "svg":
    case "ico":
    case "png":
    case "jpg":
      return <RiImageLine className={className} />;
    case "md":
      return <RiFileTextLine className={className} />; // Lucide Text icon
    default:
      return <RiFileLine className={className} />;
  }
}

interface RecursiveRenderProps {
  itemInstance: ItemInstance<Item>;
  className?: string;
}

function TreeItem({ itemInstance, className }: RecursiveRenderProps) {
  if (!itemInstance) return null;

  const isFolder = itemInstance.isFolder();
  const isExpanded = itemInstance.isExpanded();
  const childrenInstances = itemInstance.getChildren();
  const fileExtension = itemInstance.getItemData()?.fileExtension;

  return (
    <React.Fragment>
      <button
        {...itemInstance.getProps()}
        data-focus={itemInstance.isFocused()}
        data-selected={itemInstance.isSelected()}
        data-folder={isFolder}
        aria-expanded={isExpanded}
        className={cn("focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-primary/5 data-[selected=true]:bg-primary/5 data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-2 px-2 py-1 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus:z-10", className)}
      >
        {isFolder ? (
          <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 in-aria-[expanded=false]:-rotate-90" />
        ) : (
          getFileIcon(fileExtension, "text-muted-foreground pointer-events-none size-4")
        )}
        {itemInstance.getItemName()}
      </button>

      {isFolder && isExpanded && childrenInstances.length > 0 && (
        <div className="flex flex-col gap-px ms-4 relative before:w-px before:h-full before:bg-border before:absolute before:start-0 before:top-0" style={{ '--tree-level': itemInstance.getItemMeta().level } as React.CSSProperties}>
          {childrenInstances.map(childInstance => (
            <TreeItem key={childInstance.getId()} className="-ms-[calc((var(--tree-level)+1)*var(--spacing)*4)] ps-[calc((var(--tree-level)+1)*var(--spacing)*4+var(--spacing)*2)]" itemInstance={childInstance} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

export default function Component() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["app", "components"],
      selectedItems: ["components"],
    },
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  const rootItemInstance = tree.getItemInstance("root");
  const rootChildrenInstances = rootItemInstance?.getChildren() ?? [];

  return (
    <div {...tree.getContainerProps()} className="flex flex-col gap-px">
      {rootChildrenInstances.map(childInstance => (
        <TreeItem key={childInstance.getId()} itemInstance={childInstance} />
      ))}
    </div>
  );
};