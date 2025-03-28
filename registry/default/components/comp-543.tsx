"use client"

import { useState } from "react"
import {
  BoltIcon,
  ChevronDownIcon,
  ClockIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
  TrashIcon,
  X,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function Component() {
  const [recentItems, setRecentItems] = useState<string[]>([])

  const handleSelect = (item: string) => {
    setRecentItems((prev) => {
      const updated = [item, ...prev.filter((i) => i !== item)].slice(0, 3) // Keep top 3 unique items
      return updated
    })
  }

  const handleRemove = (item: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setRecentItems((prev) => prev.filter((i) => i !== item))
  }

  const menuItems = [
    { label: "Copy", icon: CopyPlusIcon },
    { label: "Edit", icon: BoltIcon },
    { label: "Group", icon: Layers2Icon },
    { label: "Clone", icon: FilesIcon },
    { label: "Delete", icon: TrashIcon, variant: "destructive" as const },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Recent actions
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {recentItems.length > 0 && (
          <>
            <DropdownMenuLabel className="flex items-center gap-2">
              <ClockIcon size={14} className="opacity-60" aria-hidden="true" />
              Recent
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              {recentItems.map((item) => {
                const { icon: Icon, variant } =
                  menuItems.find((i) => i.label === item) || {}
                return (
                  <DropdownMenuItem
                    key={item}
                    onSelect={() => handleSelect(item)}
                    variant={variant}
                    className="flex justify-between"
                  >
                    <div className="flex items-center gap-2">
                      {Icon && (
                        <Icon
                          size={16}
                          className="opacity-60"
                          aria-hidden="true"
                        />
                      )}
                      {item}
                    </div>
                    <button
                      type="button"
                      onClick={handleRemove(item)}
                      className="p-1"
                    >
                      <X
                        size={16}
                        className="cursor-pointer opacity-60"
                        aria-hidden="true"
                      />
                    </button>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          {menuItems.map(({ label, icon: Icon, variant }) => (
            <DropdownMenuItem
              key={label}
              onSelect={() => handleSelect(label)}
              variant={variant}
            >
              <Icon size={16} className="opacity-60" aria-hidden="true" />
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
