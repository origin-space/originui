"use client"

import { useId, useState } from "react"
import { ClockIcon } from "lucide-react"

import { Calendar } from "@/registry/default/ui/calendar"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <div className="rounded-md border">
        <Calendar
          mode="single"
          className="p-2"
          selected={date}
          onSelect={setDate}
        />
        <div className="border-t p-3">
          <div className="flex items-center gap-3">
            <Label htmlFor={id} className="text-xs">
              Enter time
            </Label>
            <div className="relative grow">
              <Input
                id={id}
                type="time"
                step="1"
                defaultValue="12:00:00"
                className="peer appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <ClockIcon size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Time input -{" "}
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
