"use client";

import { Button } from "@/components/ui/button";
import { TicketPercent, X } from "lucide-react";
import { useState, useEffect } from "react";

// Define the sale end date - eg: new Date('2024-12-31T23:59:59');
const saleEndDate = new Date(Date.now() + (9 * 60 * 60 * 1000) + (45 * 60 * 1000) + (24 * 1000)); // Setting 9h 45m 24s from now for demo purposes

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function Banner20() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = saleEndDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false
      });
    };

    // Calculate immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible || timeLeft.isExpired) return null;

  return (
    <div className="px-4 py-3 bg-muted text-foreground dark">
      <div className="flex gap-2 md:items-center">
        <div className="grow flex gap-3 md:items-center">
          <div className="size-9 flex items-center justify-center shrink-0 max-md:mt-0.5 rounded-full bg-primary/15" aria-hidden="true">
            <TicketPercent className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <div className="grow flex flex-col md:flex-row justify-between md:items-center gap-3">
            <div className="space-y-0.5">
              <p className="text-sm font-medium">
                Black Friday Sale!
              </p>
              <p className="text-sm text-muted-foreground">
                It kicks off today and is available for just 24 hours—don't miss out!
              </p>
            </div>
            <div className="flex max-md:flex-wrap gap-3">
              <div className="flex items-center text-sm tabular-nums bg-primary/15 rounded-lg divide-x divide-primary-foreground">
                {timeLeft.days > 0 && <span className="h-8 flex items-center justify-center p-2">{timeLeft.days}<span className="text-muted-foreground">d</span></span>}
                <span className="h-8 flex items-center justify-center p-2">{timeLeft.hours.toString().padStart(2, '0')}<span className="text-muted-foreground">h</span></span>
                <span className="h-8 flex items-center justify-center p-2">{timeLeft.minutes.toString().padStart(2, '0')}<span className="text-muted-foreground">m</span></span>
                <span className="h-8 flex items-center justify-center p-2">{timeLeft.seconds.toString().padStart(2, '0')}<span className="text-muted-foreground">s</span></span>
              </div>
              <Button size="sm" className="text-sm">Buy now</Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="shrink-0 -me-2 -my-1.5 p-0 size-8 hover:bg-transparent group"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}