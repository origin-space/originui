"use client";

import { useEffect, useId, useState } from "react";
import { format, parse } from "date-fns";
import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";

export default function Component() {
  const id = useId() 
  const today = new Date();
  const [month, setMonth] = useState(today);
  const [date, setDate] = useState<Date | undefined>(today);
  const [inputValue, setInputValue] = useState("");

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setDate(undefined);
    } else {
      setDate(date);
      setMonth(date);
      setInputValue(format(date, "yyyy-MM-dd"));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value) {
      const parsedDate = new Date(value);
      setDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setDate(undefined);
    }
  };

  useEffect(() => {
    setInputValue(format(today, "yyyy-MM-dd"));
  }, []);

  return (
    <div>
      <div className="rounded-lg border border-border p-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDayPickerSelect}
          month={month}
          onMonthChange={setMonth}
        />
        <Input
          id={id}
          type="date"
          value={inputValue}
          onChange={handleInputChange}
          className="[&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Calendar - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
