"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}        
        className="rounded-lg border border-border p-2"
        classNames={{
          today: "font-semibold *:after:pointer-events-none *:after:absolute *:after:bottom-1.5 *:after:start-1/2 *:after:z-10 *:after:h-0.5 *:after:w-3 *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-foreground/30 *:after:transition-colors",
        }}
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Custom today style - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
