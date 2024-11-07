"use client"

import { useState, useMemo } from "react"
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

export default function Select43() {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("Europe/London")

  const timezones = Intl.supportedValuesOf('timeZone');  
  
  const formattedTimezones = useMemo(() => {
    return timezones.map(timezone => {
      const formatter = new Intl.DateTimeFormat('en', {
        timeZone: timezone,
        timeZoneName: 'shortOffset',
      });
      const parts = formatter.formatToParts(new Date());
      const offset = parts.find(part => part.type === 'timeZoneName')?.value || '';
      const modifiedOffset = offset === 'GMT' ? 'GMT+0' : offset;
      
      return {
        value: timezone,
        label: `(${modifiedOffset}) ${timezone.replace(/_/g, ' ')}`,
        numericOffset: parseInt(offset.replace('GMT', '').replace('+', '') || '0')
      };
    })
    .sort((a, b) => a.numericOffset - b.numericOffset);
  }, [timezones]);  

  return (
    <div className="space-y-2">
      <Label htmlFor="select-43">Timezone select with search</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="select-43"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal px-3 bg-background hover:bg-background"
          >
            <span className={cn("truncate", !value && "text-muted-foreground")}>
              {value
                ? formattedTimezones.find((timezone) => timezone.value === value)?.label
                : "Select timezone"}
            </span>
            <ChevronDown size={16} strokeWidth={2} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 min-w-[var(--radix-popper-anchor-width)]" align="start">
          <Command
            filter={(value, search) => {
              const normalizedValue = value.toLowerCase();
              const normalizedSearch = search.toLowerCase().replace(/\s+/g, '');
              return normalizedValue.includes(normalizedSearch) ? 1 : 0;
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
                    <Check
                      className={cn(
                        "ml-auto",
                        value === itemValue ? "opacity-100" : "opacity-0"
                      )}
                    />
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
