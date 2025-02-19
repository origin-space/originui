"use client";

import { cn } from "@/registry/default/lib/utils";
import { RangeCalendar } from "@/registry/default/ui/calendar-rac";
import { DateInput, dateInputStyle } from "@/registry/default/ui/datefield-rac";
import { CalendarIcon } from "lucide-react";
import { Button, DateRangePicker, Dialog, Group, Label, Popover } from "react-aria-components";

export default function Component() {
  return (
    <DateRangePicker className="*:not-first:mt-2">
      <Label className="text-foreground text-sm font-medium">Date range picker</Label>
      <div className="flex">
        <Group className={cn(dateInputStyle, "pe-9")}>
          <DateInput slot="start" unstyled />
          <span aria-hidden="true" className="text-muted-foreground/70 px-2">
            -
          </span>
          <DateInput slot="end" unstyled />
        </Group>
        <Button className="text-muted-foreground/80 hover:text-foreground outline-ring/30 dark:outline-ring/40 z-10 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus-visible:outline-hidden data-focus-visible:outline-2">
          <CalendarIcon size={16} />
        </Button>
      </div>
      <Popover
        className="bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border shadow-lg outline-hidden"
        offset={4}
      >
        <Dialog className="max-h-[inherit] overflow-auto p-2">
          <RangeCalendar />
        </Dialog>
      </Popover>
      <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="hover:text-foreground underline"
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
