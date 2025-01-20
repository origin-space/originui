"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import type { WeekNumberProps } from "react-day-picker";

export default function Component() {    
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}            
        className="rounded-lg border border-border p-2"
        fixedWeeks
        showWeekNumber
        components={{
          WeekNumber: ({ week, ...props }: WeekNumberProps) => {            
            return (
              <th {...props}>{week.weekNumber}</th>
            )
          }
        }}        
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Calendar with week number - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
