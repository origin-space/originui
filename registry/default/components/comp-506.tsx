"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns";

export default function Component() {
  const today = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 48)
  })

  return (
    <div>
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate} 
        numberOfMonths={3}  
        pagedNavigation
        showOutsideDays={false}   
        className="rounded-lg border border-border p-2"
        classNames={{
          months: "sm:flex-col md:flex-row gap-8",
          month: "relative first-of-type:before:hidden before:absolute max-md:before:inset-x-2 max-md:before:h-px max-md:before:-top-4 md:before:inset-y-2 md:before:w-px before:bg-border md:before:-left-4",
        }}
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Three visible months - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
