"use client"

import { useId, useMemo, useState } from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/registry/default/lib/utils"
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

export default function Component() {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("Europe/London")

  const timezones = Intl.supportedValuesOf("timeZone")

  const formattedTimezones = useMemo(() => {
    return timezones
      .map((timezone) => {
        const formatter = new Intl.DateTimeFormat("en", {
          timeZone: timezone,
          timeZoneName: "shortOffset",
        })
        const parts = formatter.formatToParts(new Date())
        const offset =
          parts.find((part) => part.type === "timeZoneName")?.value || ""
        const modifiedOffset = offset === "GMT" ? "GMT+0" : offset

        return {
          value: timezone,
          label: `(${modifiedOffset}) ${timezone.replace(/_/g, " ")}`,
          numericOffset: parseInt(
            offset.replace("GMT", "").replace("+", "") || "0"
          ),
        }
      })
      .sort((a, b) => a.numericOffset - b.numericOffset)
  }, [timezones])

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Timezone select with search</Label>
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
                ? formattedTimezones.find(
                    (timezone) => timezone.value === value
                  )?.label
                : "Select timezone"}
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
          <Command
            filter={(value, search) => {
              const normalizedValue = value.toLowerCase()
              const normalizedSearch = search.toLowerCase().replace(/\s+/g, "")
              return normalizedValue.includes(normalizedSearch) ? 1 : 0
            }}
          >
            <CommandInput placeholder="Search timezone..." />
            <CommandList>
              <CommandEmpty>No timezone found.</CommandEmpty>
              <CommandGroup>
                {formattedTimezones.map(({ value: itemValue, label }) => (
                  <CommandItem
                    key={itemValue}
                    value={itemValue}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {label}
                    {value === itemValue && (
                      <CheckIcon size={16} className="ml-auto" />
                    )}
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
