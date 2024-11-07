// Dependencies: pnpm install lucide-react

"use client";

import { Label } from "@/components/ui/label";
import { Check, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const organizations = [
  {
    value: "originui",
    label: "Origin UI",
  },
  {
    value: "cruip",
    label: "Cruip",
  },
];

export default function Select42() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("originui");

  return (
    <div className="space-y-2">
      <Label htmlFor="select-42">Select with search and button</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="select-42"
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-background px-3 font-normal hover:bg-background"
          >
            <span className={cn("truncate", !value && "text-muted-foreground")}>
              {value
                ? organizations.find((organization) => organization.value === value)?.label
                : "Select organization"}
            </span>
            <ChevronDown
              size={16}
              strokeWidth={2}
              className="shrink-0 text-muted-foreground/80"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full min-w-[var(--radix-popper-anchor-width)] p-0"
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
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {organization.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === organization.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <Button variant="ghost" className="w-full justify-start font-normal">
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="-ms-2 me-2 opacity-60"
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
  );
}
