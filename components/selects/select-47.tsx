"use client"

import { useState, Fragment } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const countries = [
  {
    continent: "America",
    items: [
      { value: "United States", flag: "🇺🇸" },
      { value: "Canada", flag: "🇨🇦" },
      { value: "Mexico", flag: "🇲🇽" },
    ],
  },
  {
    continent: "Africa",
    items: [
      { value: "South Africa", flag: "🇿🇦" },
      { value: "Nigeria", flag: "🇳🇬" },
      { value: "Morocco", flag: "🇲🇦" },
    ],
  },
  {
    continent: "Asia",
    items: [
      { value: "China", flag: "🇨🇳" },
      { value: "Japan", flag: "🇯🇵" },
      { value: "India", flag: "🇮🇳" },
    ],
  },
  {
    continent: "Europe",
    items: [
      { value: "United Kingdom", flag: "🇬🇧" },
      { value: "France", flag: "🇫🇷" },
      { value: "Germany", flag: "🇩🇪" },
    ],
  },
  {
    continent: "Oceania",
    items: [
      { value: "Australia", flag: "🇦🇺" },
      { value: "New Zealand", flag: "🇳🇿" },
    ],
  },
];

export default function Select7() {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  return (
    <div className="space-y-2">
      <Label htmlFor="select-7">Options with flag and search</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="select-7"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal px-3 bg-background hover:bg-background"
          >
            {value ? (
              <span className="flex items-center gap-2 min-w-0">
                <span className="text-lg leading-none">
                  {countries.map(group => 
                    group.items.find(item => item.value === value)
                  ).filter(Boolean)[0]?.flag}
                </span>
                <span className="truncate">{value}</span>
              </span>
            ) : (
              <span className="text-muted-foreground">Select country</span>
            )}
            <ChevronDown size={16} strokeWidth={2} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 min-w-[var(--radix-popper-anchor-width)]" align="start">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              {countries.map((group) => (
                <Fragment key={group.continent}>
                  <CommandGroup heading={group.continent}>
                    {group.items.map((country) => (
                      <CommandItem
                        key={country.value}
                        value={country.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue)
                          setOpen(false)
                        }}
                      >
                        <span className="text-lg leading-none">{country.flag}</span> {country.value}  
                        <Check
                          className={cn(
                            "ml-auto",
                            value === country.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Fragment>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
