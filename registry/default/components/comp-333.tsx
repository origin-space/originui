"use client"

import * as React from "react"
import {
  ArrowUpRightIcon,
  CircleFadingPlusIcon,
  FileInputIcon,
  FolderPlusIcon,
  SearchIcon,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command"

export default function Component() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        className="border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon
            className="text-muted-foreground/80 -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
          <span className="text-muted-foreground/70 font-normal">Search</span>
        </span>
        <kbd className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick start">
            <CommandItem>
              <FolderPlusIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>New folder</span>
              <CommandShortcut className="justify-center">⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileInputIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Import document</span>
              <CommandShortcut className="justify-center">⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CircleFadingPlusIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Add block</span>
              <CommandShortcut className="justify-center">⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to dashboard</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to apps</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to connections</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
