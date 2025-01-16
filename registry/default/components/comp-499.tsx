"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { Button } from "@/registry/default/ui/button";
import { addDays } from "date-fns";

export default function Component() {    
  const today = new Date();
  const selectedDay = addDays(today, -28);
  const [month, setMonth] = useState(selectedDay);
  const [date, setDate] = useState<Date | undefined>(selectedDay)

  return (
    <div>
      <div className="rounded-lg border border-border p-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}           
          month={month}
          onMonthChange={setMonth}    
        />
        <Button variant="ghost" size="sm" onClick={() => setMonth(today)}>Go to Today</Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Go to today button - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
