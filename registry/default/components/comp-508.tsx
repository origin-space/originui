"use client";

import { useState, useEffect } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { DayButtonProps } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/registry/default/lib/utils";

const GOOD_PRICE_THRESHOLD = 100;

export default function Component() {
  const today = new Date();
  const [date, setDate] = useState<Date | undefined>(today)

  // Mock price data
  const [mockPriceData, setMockPriceData] = useState<Record<string, number>>({});
  useEffect(() => {
    const generateMockPriceData = () => {
      const data: Record<string, number> = {};

      for (let i = 0; i < 60; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateKey = format(date, 'yyyy-MM-dd');
        const randomPrice = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
        data[dateKey] = randomPrice;
      }      
      return data;
    };
    setMockPriceData(generateMockPriceData());
  }, []); 

  const isDateDisabled = (date: Date) => {
    return !mockPriceData[format(date, 'yyyy-MM-dd')];
  };

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}   
        numberOfMonths={2}  
        pagedNavigation  
        showOutsideDays={false}      
        className="rounded-lg border border-border p-2"
        classNames={{
          weekday: "w-12",
          day_button: "size-12",
          today: "*:after:hidden",          
        }}
        components={{
          DayButton: (props: DayButtonProps) => <DayButton {...props} prices={mockPriceData} />,
        }}
        disabled={isDateDisabled}
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Calendar with prices - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}

function DayButton(props: DayButtonProps & { prices: Record<string, number> }) {
  const { day, modifiers, prices, ...buttonProps } = props;
  const price = prices[format(day.date, 'yyyy-MM-dd')];
  const isGoodPrice = price < GOOD_PRICE_THRESHOLD;
  
  return (
    <button
      {...buttonProps}
    >
      <span className="flex flex-col">
        {props.children}
        {price && (
          <span 
            className={cn(
              "text-[10px] font-medium",
              isGoodPrice 
                ? 'text-emerald-500' 
                : 'text-muted-foreground group-data-[selected]:text-primary-foreground/70'
            )}
          >
            ${price}
          </span>
        )}
      </span>
    </button>
  );
}
