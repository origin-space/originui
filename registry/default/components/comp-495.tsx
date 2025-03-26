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
        classNames={{
          day: "relative before:absolute before:inset-y-px before:inset-x-0 [&.range-start:not(.range-end):before]:bg-linear-to-r before:from-transparent before:from-50% before:to-accent before:to-50% [&.range-end:not(.range-start):before]:bg-linear-to-l",
          day_button:
            "rounded-full group-[.range-start:not(.range-end)]:rounded-e-full group-[.range-end:not(.range-start)]:rounded-s-full",
        }}
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Custom select range style -{" "}
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
