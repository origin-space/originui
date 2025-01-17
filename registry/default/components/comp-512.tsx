"use client";

import { useId, useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { Label } from "@/registry/default/ui/label";
import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { format } from "date-fns";

export default function Component() {    
  const id = useId();
  const [date, setDate] = useState<Date | undefined>()

  return (
    <div>
      <div className="space-y-2">
        <Label htmlFor={id}>Date picker</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "group w-full justify-between bg-background px-3 font-normal outline-offset-0 hover:bg-background focus-visible:border-ring focus-visible:outline-[3px] focus-visible:outline-ring/20",
                !date && "text-muted-foreground"
              )}
            >
              <span className={cn("truncate", !date && "text-muted-foreground")}>{date ? format(date, "PPP") : "Pick a date"}</span>
              <CalendarIcon
                size={16}
                strokeWidth={2}
                className="shrink-0 text-muted-foreground/80 group-hover:text-foreground transition-colors"
                aria-hidden="true"
              />          
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
          <Calendar
            mode="single" 
            selected={date}
            onSelect={setDate}        
          />
          </PopoverContent>
        </Popover>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">Built with <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
