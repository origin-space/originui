"use client"

import React from "react";
import {
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core";
import { useTree } from "@headless-tree/react";
import {
  ChevronDownIcon,
  FolderIcon,
  FileIcon,
  FileTextIcon,
  FileCode2Icon,
  FileJson2Icon,
} from "lucide-react";
import { RiImageLine, RiReactjsLine, RiBracesLine, RiCodeSSlashLine, RiFileTextLine, RiFileLine, RiFolderLine } from "@remixicon/react"

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

export default function Component() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["components"],
      selectedItems: ["components/button.tsx"],
    },
    rootItemId: "root",
    getItemName: (item) => item.getItemData()?.name ?? "Unknown",
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId]?.children ?? [],
    },
    features: [syncDataLoaderFeature, selectionFeature, hotkeysCoreFeature],
  });

  return (
    <div {...tree.getContainerProps()} className="flex flex-col relative before:absolute before:inset-0 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(1.5rem-1px),var(--border)_calc(1.5rem-1px),var(--border)_1.5rem)] before:-ms-2">
      {tree.getItems().map((item) => {
        const isFolder = item.isFolder();
        const itemData = item.getItemData(); // Get data once
        const fileExtension = itemData?.fileExtension;

        return (
          <button
            key={item.getId()}
            {...item.getProps()}
            style={{ '--tree-level': item.getItemMeta().level } as React.CSSProperties}
            data-focus={item.isFocused()}
            data-selected={item.isSelected()}
            data-folder={isFolder}
            aria-expanded={item.isExpanded()}
            className="border-y border-background bg-background outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 ms-[calc(var(--tree-level)*1.5rem)] focus:z-10"
          >
              {isFolder ? (
                <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 in-aria-[expanded=false]:-rotate-90" />
              ) : (
                getFileIcon(fileExtension, "text-muted-foreground pointer-events-none size-4")
              )}
              {item.getItemName()}
          </button>
        );
      })}
    </div>
  );
};