"use client"

import { useId, useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { Calendar } from "@/registry/default/ui/calendar"
import { Label } from "@/registry/default/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

export default function Component() {
  const id = useId()
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <div>
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>Date range picker</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                !date && "text-muted-foreground"
              )}
            >
              <span
                className={cn("truncate", !date && "text-muted-foreground")}
              >
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
                className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
                aria-hidden="true"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <Calendar mode="range" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p>
    </div>
  )
}
