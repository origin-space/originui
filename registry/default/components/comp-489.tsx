"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Component() {
  //const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="range"
      // formatters={{
      //   formatWeekdayName: (day) => day?.toLocaleDateString('en-US', { weekday: 'narrow' })
      // }}
      // selected={date}
      // onSelect={setDate}
      className="rounded-lg border border-border p-2"
    />
  );
}
