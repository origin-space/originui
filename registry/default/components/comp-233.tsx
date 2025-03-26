"use client"

import { useId, useState } from "react"
import {
  BlocksIcon,
  BrainIcon,
  ChevronDownIcon,
  CpuIcon,
  DatabaseIcon,
  GlobeIcon,
  LayoutIcon,
  LineChartIcon,
  NetworkIcon,
  SearchIcon,
  ServerIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command"
import { Label } from "@/registry/default/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

const items = [
  {
    value: "analytics platform",
    label: "Analytics Platform",
    icon: LineChartIcon,
    number: 2451,
  },
  {
    value: "ai services",
    label: "AI Services",
    icon: BrainIcon,
    number: 1832,
  },
  {
    value: "database systems",
    label: "Database Systems",
    icon: DatabaseIcon,
    number: 1654,
  },
  {
    value: "compute resources",
    label: "Compute Resources",
    icon: CpuIcon,
    number: 943,
  },
  {
    value: "network services",
    label: "Network Services",
    icon: NetworkIcon,
    number: 832,
  },
  {
    value: "web services",
    label: "Web Services",
    icon: GlobeIcon,
    number: 654,
  },
  {
    value: "monitoring tools",
    label: "Monitoring Tools",
    icon: SearchIcon,
    number: 432,
  },
  {
    value: "server management",
    label: "Server Management",
    icon: ServerIcon,
    number: 321,
  },
  {
    value: "infrastructure",
    label: "Infrastructure",
    icon: BlocksIcon,
    number: 234,
  },
  {
    value: "frontend services",
    label: "Frontend Services",
    icon: LayoutIcon,
    number: 123,
  },
]

export default function Component() {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Options with icon and number</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
          >
            {value ? (
              <span className="flex min-w-0 items-center gap-2">
                {(() => {
                  const selectedItem = items.find(
                    (item) => item.value === value
                  )
                  if (selectedItem) {
                    const Icon = selectedItem.icon
                    return <Icon className="text-muted-foreground size-4" />
                  }
                  return null
                })()}
                <span className="truncate">
                  {items.find((item) => item.value === value)?.label}
                </span>
              </span>
            ) : (
              <span className="text-muted-foreground">
                Select service category
              </span>
            )}
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
            <CommandInput placeholder="Search services..." />
            <CommandList>
              <CommandEmpty>No service found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="text-muted-foreground size-4" />
                      {item.label}
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {item.number.toLocaleString()}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
