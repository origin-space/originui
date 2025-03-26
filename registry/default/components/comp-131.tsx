"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

const options = [
  {
    label: "Merge pull request",
    description:
      "All commits from this branch will be added to the base branch via a commit version.",
  },
  {
    label: "Squash and merge",
    description:
      "The 6 commits from this branch will be combined into one commit in the base branch.",
  },
  {
    label: "Rebase and merge",
    description:
      "The 6 commits from this branch will be rebased and added to the base branch.",
  },
]

export default function Component() {
  const [selectedIndex, setSelectedIndex] = useState("0")

  return (
    <div className="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
        {options[Number(selectedIndex)].label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
            size="icon"
            aria-label="Options"
          >
            <ChevronDownIcon size={16} aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="max-w-64 md:max-w-xs"
          side="bottom"
          sideOffset={4}
          align="end"
        >
          <DropdownMenuRadioGroup
            value={selectedIndex}
            onValueChange={setSelectedIndex}
          >
            {options.map((option, index) => (
              <DropdownMenuRadioItem
                key={option.label}
                value={String(index)}
                className="items-start [&>span]:pt-1.5"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{option.label}</span>
                  <span className="text-muted-foreground text-xs">
                    {option.description}
                  </span>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
