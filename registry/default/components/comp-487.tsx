"use client";

import { Calendar } from "@/registry/default/ui/calendar-rac";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import type { DateValue } from "react-aria-components";

export default function Component() {
  const [date, setDate] = useState<DateValue | null>(today(getLocalTimeZone()));

  return (
    <div>
      <Calendar className="rounded-lg border border-border p-2" value={date} onChange={setDate} />
      <p
        className="mt-4 text-center text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Calendar -{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </div>
  );
}
