import { addDays } from "date-fns"

import { Calendar } from "@/registry/default/ui/calendar"

export default function Component() {
  const today = new Date()

  return (
    <div>
      <Calendar
        mode="range"
        disabled={[
          { before: new Date() }, // Dates before today
          new Date(), // Today
          { dayOfWeek: [0, 6] }, // Weekends
          {
            from: addDays(today, 14), // 14th day from now
            to: addDays(today, 16), // 16th day from now
          },
          {
            from: addDays(today, 23), // 23th day from now
            to: addDays(today, 24), // 24th day from now
          },
        ]}
        excludeDisabled
        className="rounded-md border p-2"
      />
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Disabled dates -{" "}
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
