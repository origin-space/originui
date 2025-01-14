"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Component() {
  return (
    <Calendar
      mode="single"
      // formatters={{
      //   formatWeekdayName: (day) => day?.toLocaleDateString('en-US', { weekday: 'narrow' })
      // }}      
      className="rounded-lg border border-border p-2"
    />
  );
}
