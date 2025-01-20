"use client";

import { Calendar } from "@/registry/default/ui/calendar";
import { useState } from "react";

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-border p-2"
        classNames={{
          month_caption: "ms-2.5 me-20 justify-start",
          nav: "justify-end",
        }}
      />
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Calendar -{" "}
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
