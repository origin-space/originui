"use client";

import { Calendar } from "@/registry/default/ui/calendar";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Component() {
  const today = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 3),
  });

  return (
    <div>
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-border p-2"
        classNames={{
          day: "[&.range-start:not(.range-end)]:bg-gradient-to-r [&.range-start:not(.range-end)]:from-transparent [&.range-start:not(.range-end)]:from-50% [&.range-start:not(.range-end)]:to-accent to-50% [&.range-end:not(.range-start)]:bg-gradient-to-r [&.range-end:not(.range-start)]:from-accent [&.range-end:not(.range-start)]:from-50% [&.range-end:not(.range-start)]:to-transparent to-50%",
          day_button:
            "rounded-full group-[.range-start:not(.range-end)]:rounded-e-full group-[.range-end:not(.range-start)]:rounded-s-full",
        }}
      />
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Custom select day style -{" "}
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
