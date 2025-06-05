"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  expandAllFeature,
  hotkeysCoreFeature,
  searchFeature,
  selectionFeature,
  syncDataLoaderFeature,
  TreeState,
} from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import {
  CircleXIcon,
  FilterIcon,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react"

import { Input } from "@/registry/default/ui/input"
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
  // Store the initial expanded items to reset when search is cleared
  const initialExpandedItems = ["engineering", "frontend", "design-system"]
  const [state, setState] = useState<Partial<TreeState<Item>>>({})
  const [searchValue, setSearchValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const tree = useTree<Item>({
    state,
    setState,
    initialState: {
      expandedItems: initialExpandedItems,
    },
    indent,
    rootItemId: "company",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [
      syncDataLoaderFeature,
      hotkeysCoreFeature,
      selectionFeature,
      searchFeature,
      expandAllFeature,
    ],
  })

  // Handle clearing the search
  const handleClearSearch = () => {
    setSearchValue("")

    // Manually trigger the tree's search onChange with an empty value
    // to ensure item.isMatchingSearch() is correctly updated.
    const searchProps = tree.getSearchInputElementProps()
    if (searchProps.onChange) {
      const syntheticEvent = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement> // Cast to the expected event type
      searchProps.onChange(syntheticEvent)
    }

    // Reset tree state to initial expanded items
    setState((prevState) => ({
      ...prevState,
      expandedItems: initialExpandedItems,
    }))

    // Clear custom filtered items
    setFilteredItems([])

    if (inputRef.current) {
      inputRef.current.focus()
      // Also clear the internal search input
      inputRef.current.value = ""
    }
  }

  // Keep track of filtered items separately from the tree's internal search state
  const [filteredItems, setFilteredItems] = useState<string[]>([])

  // This function determines if an item should be visible based on our custom filtering
  const shouldShowItem = (itemId: string) => {
    if (!searchValue || searchValue.length === 0) return true
    return filteredItems.includes(itemId)
  }

  // Update filtered items when search value changes
  useEffect(() => {
    if (!searchValue || searchValue.length === 0) {
      setFilteredItems([])
      return
    }

    // Get all items
    const allItems = tree.getItems()

    // First, find direct matches
    const directMatches = allItems
      .filter((item) => {
        const name = item.getItemName().toLowerCase()
        return name.includes(searchValue.toLowerCase())
      })
      .map((item) => item.getId())

    // Then, find all parent IDs of matching items
    const parentIds = new Set<string>()
    directMatches.forEach((matchId) => {
      let item = tree.getItems().find((i) => i.getId() === matchId)
      while (item?.getParent && item.getParent()) {
        const parent = item.getParent()
        if (parent) {
          parentIds.add(parent.getId())
          item = parent
        } else {
          break
        }
      }
    })

    // Find all children of matching items
    const childrenIds = new Set<string>()
    directMatches.forEach((matchId) => {
      const item = tree.getItems().find((i) => i.getId() === matchId)
      if (item && item.isFolder()) {
        // Get all descendants recursively
        const getDescendants = (itemId: string) => {
          const children = items[itemId]?.children || []
          children.forEach((childId) => {
            childrenIds.add(childId)
            if (items[childId]?.children?.length) {
              getDescendants(childId)
            }
          })
        }

        getDescendants(item.getId())
      }
    })

    // Combine direct matches, parents, and children
    setFilteredItems([
      ...directMatches,
      ...Array.from(parentIds),
      ...Array.from(childrenIds),
    ])

    // Keep all folders expanded during search to ensure all matches are visible
    // Store current expanded state first
    const currentExpandedItems = tree.getState().expandedItems || []

    // Get all folder IDs that need to be expanded to show matches
    const folderIdsToExpand = allItems
      .filter((item) => item.isFolder())
      .map((item) => item.getId())

    // Update expanded items in the tree state
    setState((prevState) => ({
      ...prevState,
      expandedItems: [
        ...new Set([...currentExpandedItems, ...folderIdsToExpand]),
      ],
    }))
  }, [searchValue, tree])

  return (
    <div className="flex h-full flex-col gap-2 *:nth-2:grow">
      <div className="relative">
        <Input
          ref={inputRef}
          className="peer ps-9"
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value
            setSearchValue(value)

            // Apply the search to the tree's internal state as well
            const searchProps = tree.getSearchInputElementProps()
            if (searchProps.onChange) {
              searchProps.onChange(e)
            }

            if (value.length > 0) {
              // If input has at least one character, expand all items
              tree.expandAll()
            } else {
              // If input is cleared, reset to initial expanded state
              setState((prevState) => ({
                ...prevState,
                expandedItems: initialExpandedItems,
              }))
              setFilteredItems([])
            }
          }}
          // Prevent the internal search from being cleared on blur
          onBlur={(e) => {
            // Prevent default blur behavior
            e.preventDefault()

            // Re-apply the search to ensure it stays active
            if (searchValue && searchValue.length > 0) {
              const searchProps = tree.getSearchInputElementProps()
              if (searchProps.onChange) {
                const syntheticEvent = {
                  target: { value: searchValue },
                } as React.ChangeEvent<HTMLInputElement>
                searchProps.onChange(syntheticEvent)
              }
            }
          }}
          type="search"
          placeholder="Filter items..."
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <FilterIcon className="size-4" aria-hidden="true" />
        </div>
        {searchValue && (
          <button
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear search"
            onClick={handleClearSearch}
          >
            <CircleXIcon className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <Tree indent={indent} tree={tree}>
        {searchValue && filteredItems.length === 0 ? (
          <p className="px-3 py-4 text-center text-sm">
            No items found for "{searchValue}"
          </p>
        ) : (
          tree.getItems().map((item) => {
            const isVisible = shouldShowItem(item.getId())

            return (
              <TreeItem
                key={item.getId()}
                item={item}
                data-visible={isVisible || !searchValue}
                className="data-[visible=false]:hidden"
              >
                <TreeItemLabel>
                  <span className="flex items-center gap-2">
                    {item.isFolder() &&
                      (item.isExpanded() ? (
                        <FolderOpenIcon className="text-muted-foreground pointer-events-none size-4" />
                      ) : (
                        <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                      ))}
                    {item.getItemName()}
                  </span>
                </TreeItemLabel>
              </TreeItem>
            )
          })
        )}
      </Tree>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-xs"
      >
        Tree with filtering ∙{" "}
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
