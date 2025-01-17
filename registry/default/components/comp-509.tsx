"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/registry/default/ui/calendar";
import { Button } from "@/registry/default/ui/button";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

export default function Component() {
  const today = new Date();
  const [date, setDate] = useState<Date>(today)
  const [time, setTime] = useState<string | null>(null)

  // Mock time slots data
  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: true },
    { time: "17:30", available: true },
  ];

  return (
    <div>
      <div className="rounded-lg border border-border">
        <div className="flex max-sm:flex-col">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate);
                setTime(null);
              }
            }}
            className="p-2 sm:pe-5"
            disabled={[
              { before: today }, // Dates before today
            ]}
          />
          <div className="w-full max-sm:h-48 sm:w-40 relative">
            <div className="absolute inset-0 py-4 max-sm:border-t border-border">
              <ScrollArea className="h-full sm:border-s border-border">
                <div className="space-y-3">
                  <div className="h-5 shrink-0 flex items-center px-5">
                    <p className="font-medium text-sm">{format(date, "EEEE, d")}</p>
                  </div>
                  <div className="grid max-sm:grid-cols-2 gap-1.5 px-5">
                    {timeSlots.map(({ time: timeSlot, available }) => (
                      <Button
                        key={timeSlot}
                        variant={time === timeSlot ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                        onClick={() => setTime(timeSlot)}
                        disabled={!available}
                      >
                        {timeSlot}
                      </Button>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Appointment picker - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
