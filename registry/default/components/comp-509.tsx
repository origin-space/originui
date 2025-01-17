"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/registry/default/ui/calendar";
import { Button } from "@/registry/default/ui/button";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

export default function Component() {    
  const [date, setDate] = useState<Date>(new Date())

  return (
    <div>
      <div className="rounded-lg border border-border">
        <div className="flex gap-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => newDate && setDate(newDate)}    
            className="p-2"
            disabled={[
              { before: new Date() }, // Dates before today
            ]}
          />
          <div className="w-36 flex flex-col mt-2">
            <div className="h-9 mb-1 flex items-center">
              <p className="font-medium text-sm">{format(date, "EEE, d")}</p>
            </div>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <ScrollArea className="h-full">
                  <div className="flex flex-col gap-1 pr-3 pt-1 pb-2">
                    {Array.from({ length: 18 }, (_, i) => {
                      const hour = Math.floor(i / 2) + 9;
                      const minute = i % 2 === 0 ? "00" : "30";
                      return (
                        <Button key={i} variant="outline" size="sm" className="w-full">
                          {`${hour.toString().padStart(2, '0')}:${minute}`}
                        </Button>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Calendar - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
