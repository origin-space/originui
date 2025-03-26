"use client"

import { useState } from "react"
import { addDays, subDays } from "date-fns"

import { Calendar } from "@/registry/default/ui/calendar"

export default function Component() {
  const today = new Date()
  const [date, setDate] = useState<Date[] | undefined>([
    subDays(today, 17),
    addDays(today, 2),
    addDays(today, 6),
    addDays(today, 8),
  ])

  return (
    <div>
      <Calendar
        mode="multiple"
        selected={date}
        onSelect={setDate}
        className="rounded-md border p-2"
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Multiple day selection -{" "}
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
