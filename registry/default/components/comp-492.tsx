"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns";

export default function Component() {    
  const today = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(today, 6),
    to: addDays(today, 8)
  })

  return (
    <div>
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}           
        disabled={[
          { before: new Date() }, // Dates before today
          new Date(), // Today
          { dayOfWeek: [0, 6] }, // Weekends
          {
            from: addDays(today, 14), // 14th day from now
            to: addDays(today, 16) // 16th day from now
          },
          {
            from: addDays(today, 23), // 23th day from now
            to: addDays(today, 24) // 24th day from now
          },          
        ]}
        excludeDisabled
        className="rounded-lg border border-border p-2"        
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Disabled dates - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
