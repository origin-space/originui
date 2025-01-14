"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/registry/default/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={{
        months: "relative flex",
        month: "w-full",
        month_caption: "relative mx-12 mb-1 flex h-9 items-center justify-center",
        caption_label: "text-sm font-medium",
        nav: "flex items-start",
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "absolute size-9 text-muted-foreground/80 hover:text-foreground p-0 left-0"
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "absolute size-9 text-muted-foreground/80 hover:text-foreground p-0 right-0"
        ),
        month_grid: "",
        weekdays: "",
        weekday: "size-9 rounded-lg p-0 text-xs font-medium text-muted-foreground/80",
        week: "",
        day_button: "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-sm text-foreground outline-offset-2 transition-colors focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-accent group-data-[selected]:bg-primary hover:text-foreground group-data-[selected]:text-primary-foreground group-data-[disabled]:opacity-30 group-data-[outside]:text-foreground/30 group-data-[outside]:group-data-[selected]:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-accent group-data-[selected]:group-[.range-middle]:text-foreground transition-colors",
        day: "group size-9 px-0",
        range_start: "range-start",
        range_end: "range-end",
        range_middle: "range-middle",
        selected: "",
        today: "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-background *:after:transition-colors",
        outside:
          "text-muted-foreground data-selected:bg-accent/50 data-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
          }
          return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
        },        
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }