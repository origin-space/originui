"use client";

import { useState } from "react";
import { RangeCalendar } from "@/registry/default/ui/calendar-rac";
import { today, getLocalTimeZone } from '@internationalized/date';
import type { DateRange } from "react-aria-components";

export default function Component() {
  const now = today(getLocalTimeZone());
  const [date, setDate] = useState<DateRange | null>({
    start: now,
    end: now.add({ days: 3 })
  });

  return (
    <div>
      <RangeCalendar
        className="rounded-lg border border-border p-2"
        value={date}
        onChange={setDate}      
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Range calendar - <a className="underline hover:text-foreground" href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html" target="_blank" rel="noopener nofollow">React Aria</a></p>
    </div>
  );
}
