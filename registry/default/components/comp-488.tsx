"use client"

import { useState } from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import type { DateRange } from "react-aria-components"

import { RangeCalendar } from "@/registry/default/ui/calendar-rac"

export default function Component() {
  const now = today(getLocalTimeZone())
  const [date, setDate] = useState<DateRange | null>({
    start: now,
    end: now.add({ days: 3 }),
  })

  return (
    <div>
      <RangeCalendar
        className="rounded-md border p-2"
        value={date}
        onChange={setDate}
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Range calendar -{" "}
        <a
          className="hover:text-foreground underline"
          href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </div>
  )
}
