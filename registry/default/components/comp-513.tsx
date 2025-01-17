"use client";

import { useId, useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { Label } from "@/registry/default/ui/label";
import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/registry/default/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns";

export default function Component() {    
  const id = useId();
  const today = new Date();
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <div>
      <div className="space-y-2">
        <Label htmlFor={id}>Date range picker</Label>
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
              <span className={cn("truncate", !date && "text-muted-foreground")}>
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  "Pick a date range"
                )}                
              </span>
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
            mode="range" 
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
