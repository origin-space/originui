"use client"

import { CalendarIcon } from "lucide-react"
import {
  Button,
  DatePicker,
  Dialog,
  Group,
  Label,
  Popover,
} from "react-aria-components"

import { Calendar } from "@/registry/default/ui/calendar-rac"
import { DateInput } from "@/registry/default/ui/datefield-rac"

export default function Component() {
  return (
    <DatePicker className="*:not-first:mt-2">
      <Label className="text-foreground text-sm font-medium">Date picker</Label>
      <div className="flex">
        <Group className="w-full">
          <DateInput className="pe-9" />
        </Group>
        <Button className="text-muted-foreground/80 hover:text-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 z-10 -ms-9 -me-px flex w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none data-focus-visible:ring-[3px]">
          <CalendarIcon size={16} />
        </Button>
      </div>
      <Popover
        className="bg-background text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border shadow-lg outline-hidden"
        offset={4}
      >
        <Dialog className="max-h-[inherit] overflow-auto p-2">
          <Calendar />
        </Dialog>
      </Popover>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://react-spectrum.adobe.com/react-aria/DatePicker.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </DatePicker>
  )
}
