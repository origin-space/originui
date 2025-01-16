"use client";

import { RangeCalendar } from "@/registry/default/ui/calendar-rac";
import { getLocalTimeZone, isWeekend, today } from "@internationalized/date";
import { useLocale } from "react-aria";
import type { DateValue } from "react-aria-components";

export default function Component() {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now], // Disables today
    [now.add({ days: 14 }), now.add({ days: 14 })], // Disables only the 14th day from now
    [now.add({ days: 23 }), now.add({ days: 23 })], // Disables only the 23rd day from now
  ];

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    );

  return (
    <div>
      <RangeCalendar
        className="rounded-lg border border-border p-2"
        isDateUnavailable={isDateUnavailable}
        minValue={today(getLocalTimeZone())}
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Disabled dates - <a className="underline hover:text-foreground" href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html" target="_blank" rel="noopener nofollow">React Aria</a></p>
    </div>
  );
}
