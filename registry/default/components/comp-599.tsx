"use client"

import React from "react"
import {
  checkboxesFeature,
  hotkeysCoreFeature,
  selectionFeature,
  syncDataLoaderFeature,
} from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree"

interface Item {
  name: string
  children?: string[]
}

const items: Record<string, Item> = {
  company: {
    name: "Company",
    children: ["engineering", "marketing", "operations"],
  },
  engineering: {
    name: "Engineering",
    children: ["frontend", "backend", "platform-team"],
  },
  frontend: { name: "Frontend", children: ["design-system", "web-platform"] },
  "design-system": {
    name: "Design System",
    children: ["components", "tokens", "guidelines"],
  },
  components: { name: "Components" },
  tokens: { name: "Tokens" },
  guidelines: { name: "Guidelines" },
  "web-platform": { name: "Web Platform" },
  backend: { name: "Backend", children: ["apis", "infrastructure"] },
  apis: { name: "APIs" },
  infrastructure: { name: "Infrastructure" },
  "platform-team": { name: "Platform Team" },
  marketing: { name: "Marketing", children: ["content", "seo"] },
  content: { name: "Content" },
  seo: { name: "SEO" },
  operations: { name: "Operations", children: ["hr", "finance"] },
  hr: { name: "HR" },
  finance: { name: "Finance" },
}

const indent = 20

export default function Component() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["engineering", "frontend", "design-system"],
      checkedItems: ["components", "tokens"],
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    canCheckFolders: true,
    features: [
      syncDataLoaderFeature,
      selectionFeature,
      checkboxesFeature,
      hotkeysCoreFeature,
    ],
  })

  return (
    <div className="flex h-full flex-col gap-2 *:first:grow">
      <div>
        <Tree
          className="relative before:absolute before:inset-0 before:ms-4.5 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
          indent={indent}
          tree={tree}
        >
          {tree.getItems().map((item) => {
            return (
              <div
                key={item.getId()}
                className="flex items-center gap-1.5 not-last:pb-0.5"
              >
                <Checkbox
                  checked={
                    {
                      checked: true,
                      unchecked: false,
                      indeterminate: "indeterminate" as const,
                    }[item.getCheckedState()]
                  }
                  onCheckedChange={(checked) => {
                    const checkboxProps = item.getCheckboxProps()
                    checkboxProps.onChange?.({ target: { checked } })
                  }}
                />
                <TreeItem item={item} className="flex-1 not-last:pb-0">
                  <TreeItemLabel className="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10">
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
                      {item.getItemName()}
                    </span>
                  </TreeItemLabel>
                </TreeItem>
              </div>
            )
          })}
        </Tree>
      </div>

      <div className="space-y-2">
        <p
          aria-live="polite"
          role="region"
          className="text-muted-foreground mt-2 text-xs"
        >
          Tree with canCheckFolders option ∙{" "}
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
    </div>
  )
}
