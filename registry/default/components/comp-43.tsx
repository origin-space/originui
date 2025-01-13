"use client";

import { cn } from "@/registry/default/lib/utils";
import { RangeCalendar } from "@/registry/default/ui/calendar-rac";
import { DateInput, dateInputStyle } from "@/registry/default/ui/datefield-rac";
import { getLocalTimeZone, isWeekend, today } from "@internationalized/date";
import { CalendarIcon } from "lucide-react";
import { useLocale } from "react-aria";
import type { DateValue } from "react-aria-components";
import { Button, DateRangePicker, Dialog, Group, Label, Popover } from "react-aria-components";

export default function Component() {
  const now = today(getLocalTimeZone());
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    );
  const validate = (value: { start: DateValue; end: DateValue } | null) =>
    disabledRanges.some(
      (interval) =>
        value && value.end.compare(interval[0]) >= 0 && value.start.compare(interval[1]) <= 0,
    )
      ? "Selected date range may not include unavailable dates."
      : null;

  return (
    <DateRangePicker
      className="space-y-2"
      isDateUnavailable={isDateUnavailable}
      validate={validate}
    >
      <Label className="text-sm font-medium text-foreground">
        Date range picker (unavailable dates)
      </Label>
      <div className="flex">
        <Group className={cn(dateInputStyle, "pe-9")}>
          <DateInput slot="start" unstyled />
          <span aria-hidden="true" className="px-2 text-muted-foreground/70">
            -
          </span>
          <DateInput slot="end" unstyled />
        </Group>
        <Button className="z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:outline-none data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70">
          <CalendarIcon size={16} strokeWidth={2} />
        </Button>
      </div>
      <Popover
        className="z-50 rounded-lg border border-border bg-background text-popover-foreground shadow-lg shadow-black/5 outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2"
        offset={4}
      >
        <Dialog className="max-h-[inherit] overflow-auto p-2">
          <RangeCalendar minValue={now} isDateUnavailable={isDateUnavailable} />
        </Dialog>
      </Popover>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </DateRangePicker>
  );
}
