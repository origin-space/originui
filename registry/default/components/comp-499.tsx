"use client";

import { Calendar } from "@/registry/default/ui/calendar";
import { useState } from "react";
import type { WeekNumberProps } from "react-day-picker";

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
              <th {...props}>
                <span className="inline-flex size-9 items-center justify-center">
                  {week.weekNumber}
                </span>
              </th>
            );
          },
        }}
      />
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Weekly numbers -{" "}
        <a
          className="underline hover:text-foreground"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p>
    </div>
  );
}
