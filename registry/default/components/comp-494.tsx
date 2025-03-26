"use client"

import { useState } from "react"

import { Calendar } from "@/registry/default/ui/calendar"

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border p-2"
        classNames={{
          day_button: "rounded-full",
        }}
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Custom select day style -{" "}
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
