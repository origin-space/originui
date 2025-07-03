"use client"

import React, { useState } from "react"
import {
  createOnDropHandler,
  dragAndDropFeature,
  hotkeysCoreFeature,
  keyboardDragAndDropFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core"
import { AssistiveTreeDescription, useTree } from "@headless-tree/react"
import {
  RiBracesLine,
  RiCodeSSlashLine,
  RiFileLine,
  RiFileTextLine,
  RiImageLine,
  RiReactjsLine,
} from "@remixicon/react"

import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree"

interface Item {
  name: string
  children?: string[]
  fileExtension?: string
}

const initialItems: Record<string, Item> = {
  app: {
    name: "app",
    children: ["app/layout.tsx", "app/page.tsx", "app/(dashboard)", "app/api"],
  },
  "app/layout.tsx": { name: "layout.tsx", fileExtension: "tsx" },
  "app/page.tsx": { name: "page.tsx", fileExtension: "tsx" },
  "app/(dashboard)": {
    name: "(dashboard)",
    children: ["app/(dashboard)/dashboard"],
  },
  "app/(dashboard)/dashboard": {
    name: "dashboard",
    children: ["app/(dashboard)/dashboard/page.tsx"],
  },
  "app/(dashboard)/dashboard/page.tsx": {
    name: "page.tsx",
    fileExtension: "tsx",
  },
  "app/api": { name: "api", children: ["app/api/hello"] },
  "app/api/hello": { name: "hello", children: ["app/api/hello/route.ts"] },
  "app/api/hello/route.ts": { name: "route.ts", fileExtension: "ts" },
  components: {
    name: "components",
    children: ["components/button.tsx", "components/card.tsx"],
  },
  "components/button.tsx": { name: "button.tsx", fileExtension: "tsx" },
  "components/card.tsx": { name: "card.tsx", fileExtension: "tsx" },
  lib: { name: "lib", children: ["lib/utils.ts"] },
  "lib/utils.ts": { name: "utils.ts", fileExtension: "ts" },
  public: {
    name: "public",
    children: ["public/favicon.ico", "public/vercel.svg"],
  },
  "public/favicon.ico": { name: "favicon.ico", fileExtension: "ico" },
  "public/vercel.svg": { name: "vercel.svg", fileExtension: "svg" },
  "package.json": { name: "package.json", fileExtension: "json" },
  "tailwind.config.ts": { name: "tailwind.config.ts", fileExtension: "ts" },
  "tsconfig.json": { name: "tsconfig.json", fileExtension: "json" },
  "next.config.mjs": { name: "next.config.mjs", fileExtension: "mjs" },
  "README.md": { name: "README.md", fileExtension: "md" },
  root: {
    name: "Project Root",
    children: [
      "app",
      "components",
      "lib",
      "public",
      "package.json",
      "tailwind.config.ts",
      "tsconfig.json",
      "next.config.mjs",
      "README.md",
    ],
  },
}

// Helper function to get icon based on file extension
function getFileIcon(extension: string | undefined, className: string) {
  switch (extension) {
    case "tsx":
    case "jsx":
      return <RiReactjsLine className={className} />
    case "ts":
    case "js":
    case "mjs":
      return <RiCodeSSlashLine className={className} />
    case "json":
      return <RiBracesLine className={className} />
    case "svg":
    case "ico":
    case "png":
    case "jpg":
      return <RiImageLine className={className} />
    case "md":
      return <RiFileTextLine className={className} />
    default:
      return <RiFileLine className={className} />
  }
}

const indent = 20

export default function Component() {
  const [items, setItems] = useState(initialItems)

  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["app", "app/(dashboard)", "app/(dashboard)/dashboard"],
      selectedItems: ["components"],
    },
    indent,
    rootItemId: "root",
    getItemName: (item) => item.getItemData()?.name ?? "Unknown",
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    canReorder: false,
    onDrop: createOnDropHandler((parentItem, newChildrenIds) => {
      setItems((prevItems) => {
        // Sort the children alphabetically
        const sortedChildren = [...newChildrenIds].sort((a, b) => {
          const itemA = prevItems[a]
          const itemB = prevItems[b]

          // First sort folders before files
          const isAFolder = (itemA?.children?.length ?? 0) > 0
          const isBFolder = (itemB?.children?.length ?? 0) > 0

          if (isAFolder && !isBFolder) return -1
          if (!isAFolder && isBFolder) return 1

          // Then sort alphabetically by name
          return (itemA?.name ?? "").localeCompare(itemB?.name ?? "")
        })

        return {
          ...prevItems,
          [parentItem.getId()]: {
            ...prevItems[parentItem.getId()],
            children: sortedChildren,
          },
        }
      })
    }),
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId]?.children ?? [],
    },
    features: [
      syncDataLoaderFeature,
      selectionFeature,
      hotkeysCoreFeature,
      dragAndDropFeature,
      keyboardDragAndDropFeature,
    ],
  })

  return (
    <div className="flex h-full flex-col gap-2 *:first:grow">
      <div>
        <Tree
          className="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
          indent={indent}
          tree={tree}
        >
          <AssistiveTreeDescription tree={tree} />
          {tree.getItems().map((item) => {
            return (
              <TreeItem key={item.getId()} item={item} className="pb-0!">
                <TreeItemLabel className="rounded-none py-1">
                  <span className="flex items-center gap-2">
                    {!item.isFolder() &&
                      getFileIcon(
                        item.getItemData()?.fileExtension,
                        "text-muted-foreground pointer-events-none size-4"
                      )}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            )
          })}
        </Tree>
      </div>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        File editor with drag and drop ∙{" "}
        <a
          href="https://headless-tree.lukasbach.com"
          className="hover:text-foreground underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </p>
    </div>
  )
}
