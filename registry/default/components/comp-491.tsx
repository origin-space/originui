"use client"

import { useState } from "react"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"

import { Calendar } from "@/registry/default/ui/calendar"

export default function Component() {
  const today = new Date()
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 3),
  })

  return (
    <div>
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="rounded-md border p-2"
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Range calendar -{" "}
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
