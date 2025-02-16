"use client";

import { cn } from "@/registry/default/lib/utils";
import { getLocalTimeZone, today } from "@internationalized/date";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ComponentProps } from "react";
import {
  Button,
  CalendarCell as CalendarCellRac,
  CalendarGridBody as CalendarGridBodyRac,
  CalendarGridHeader as CalendarGridHeaderRac,
  CalendarGrid as CalendarGridRac,
  CalendarHeaderCell as CalendarHeaderCellRac,
  Calendar as CalendarRac,
  Heading as HeadingRac,
  RangeCalendar as RangeCalendarRac,
  composeRenderProps,
} from "react-aria-components";

interface BaseCalendarProps {
  className?: string;
}

type CalendarProps = ComponentProps<typeof CalendarRac> & BaseCalendarProps;
type RangeCalendarProps = ComponentProps<typeof RangeCalendarRac> & BaseCalendarProps;

const CalendarHeader = () => (
  <header className="flex w-full items-center gap-1 pb-1">
    <Button
      slot="previous"
      className="text-muted-foreground/80 hover:bg-accent hover:text-foreground data-focus-visible:outline-ring/70 flex size-9 items-center justify-center rounded-lg outline-offset-2 transition-colors focus:outline-hidden data-focus-visible:outline-2"
    >
      <ChevronLeft size={16} />
    </Button>
    <HeadingRac className="grow text-center text-sm font-medium" />
    <Button
      slot="next"
      className="text-muted-foreground/80 hover:bg-accent hover:text-foreground data-focus-visible:outline-ring/70 flex size-9 items-center justify-center rounded-lg outline-offset-2 transition-colors focus:outline-hidden data-focus-visible:outline-2"
    >
      <ChevronRight size={16} />
    </Button>
  </header>
);

const CalendarGridComponent = ({ isRange = false }: { isRange?: boolean }) => {
  const now = today(getLocalTimeZone());

  return (
    <CalendarGridRac>
      <CalendarGridHeaderRac>
        {(day) => (
          <CalendarHeaderCellRac className="text-muted-foreground/80 size-9 rounded-lg p-0 text-xs font-medium">
            {day}
          </CalendarHeaderCellRac>
        )}
      </CalendarGridHeaderRac>
      <CalendarGridBodyRac className="[&_td]:px-0">
        {(date) => (
          <CalendarCellRac
            date={date}
            className={cn(
              "text-foreground data-hovered:bg-accent data-selected:bg-primary data-hovered:text-foreground data-selected:text-primary-foreground data-focus-visible:outline-ring/70 relative flex size-9 items-center justify-center rounded-lg border border-transparent p-0 text-sm font-normal whitespace-nowrap outline-offset-2 [transition-property:color,background-color,border-radius,box-shadow] duration-150 focus:outline-hidden data-disabled:pointer-events-none data-disabled:opacity-30 data-focus-visible:z-10 data-focus-visible:outline-2 data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-30",
              // Range-specific styles
              isRange &&
                "data-selected:bg-accent data-selected:text-foreground data-invalid:data-selection-end:[&:not([data-hover])]:bg-destructive data-invalid:data-selection-start:[&:not([data-hover])]:bg-destructive data-selection-end:[&:not([data-hover])]:bg-primary data-selection-start:[&:not([data-hover])]:bg-primary data-invalid:data-selection-end:[&:not([data-hover])]:text-destructive-foreground data-invalid:data-selection-start:[&:not([data-hover])]:text-destructive-foreground data-selection-end:[&:not([data-hover])]:text-primary-foreground data-selection-start:[&:not([data-hover])]:text-primary-foreground data-invalid:bg-red-100 data-selected:rounded-none data-selection-end:rounded-e-lg data-selection-start:rounded-s-lg",
              // Today indicator styles
              date.compare(now) === 0 &&
                cn(
                  "after:bg-primary after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full",
                  isRange
                    ? "data-selection-end:[&:not([data-hover])]:after:bg-background data-selection-start:[&:not([data-hover])]:after:bg-background"
                    : "data-selected:after:bg-background",
                ),
            )}
          />
        )}
      </CalendarGridBodyRac>
    </CalendarGridRac>
  );
};

const Calendar = ({ className, ...props }: CalendarProps) => {
  return (
    <CalendarRac
      {...props}
      className={composeRenderProps(className, (className) => cn("w-fit", className))}
    >
      <CalendarHeader />
      <CalendarGridComponent />
    </CalendarRac>
  );
};

const RangeCalendar = ({ className, ...props }: RangeCalendarProps) => {
  return (
    <RangeCalendarRac
      {...props}
      className={composeRenderProps(className, (className) => cn("w-fit", className))}
    >
      <CalendarHeader />
      <CalendarGridComponent isRange />
    </RangeCalendarRac>
  );
};

export { Calendar, RangeCalendar };
