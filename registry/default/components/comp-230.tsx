"use client"

import { useId, useState } from "react"
import { CheckIcon, ChevronDownIcon, PlusIcon } from "lucide-react"

import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command"
import { Label } from "@/registry/default/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

const organizations = [
  {
    value: "originui",
    label: "Origin UI",
  },
  {
    value: "cruip",
    label: "Cruip",
  },
]

export default function Component() {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("originui")

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select with search and button</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
          >
            <span className={cn("truncate", !value && "text-muted-foreground")}>
              {value
                ? organizations.find(
                    (organization) => organization.value === value
                  )?.label
                : "Select organization"}
            </span>
            <ChevronDownIcon
              size={16}
              className="text-muted-foreground/80 shrink-0"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Find organization" />
            <CommandList>
              <CommandEmpty>No organization found.</CommandEmpty>
              <CommandGroup>
                {organizations.map((organization) => (
                  <CommandItem
                    key={organization.value}
                    value={organization.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {organization.label}
                    {value === organization.value && (
                      <CheckIcon size={16} className="ml-auto" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <Button
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <PlusIcon
                    size={16}
                    className="-ms-2 opacity-60"
                    aria-hidden="true"
                  />
                  New organization
                </Button>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
