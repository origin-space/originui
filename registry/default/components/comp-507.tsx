"use client"

import { useState } from "react"
import {
  endOfMonth,
  endOfYear,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from "date-fns"
import { DateRange } from "react-day-picker"

import { Button } from "@/registry/default/ui/button"
import { Calendar } from "@/registry/default/ui/calendar"

export default function Component() {
  const today = new Date()
  const yesterday = {
    from: subDays(today, 1),
    to: subDays(today, 1),
  }
  const last7Days = {
    from: subDays(today, 6),
    to: today,
  }
  const last30Days = {
    from: subDays(today, 29),
    to: today,
  }
  const monthToDate = {
    from: startOfMonth(today),
    to: today,
  }
  const lastMonth = {
    from: startOfMonth(subMonths(today, 1)),
    to: endOfMonth(subMonths(today, 1)),
  }
  const yearToDate = {
    from: startOfYear(today),
    to: today,
  }
  const lastYear = {
    from: startOfYear(subYears(today, 1)),
    to: endOfYear(subYears(today, 1)),
  }
  const [month, setMonth] = useState(today)
  const [date, setDate] = useState<DateRange | undefined>(last7Days)

  return (
    <div>
      <div className="rounded-md border">
        <div className="flex max-sm:flex-col">
          <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
            <div className="h-full sm:border-e">
              <div className="flex flex-col px-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate({
                      from: today,
                      to: today,
                    })
                    setMonth(today)
                  }}
                >
                  Today
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yesterday)
                    setMonth(yesterday.to)
                  }}
                >
                  Yesterday
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(last7Days)
                    setMonth(last7Days.to)
                  }}
                >
                  Last 7 days
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(last30Days)
                    setMonth(last30Days.to)
                  }}
                >
                  Last 30 days
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(monthToDate)
                    setMonth(monthToDate.to)
                  }}
                >
                  Month to date
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastMonth)
                    setMonth(lastMonth.to)
                  }}
                >
                  Last month
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(yearToDate)
                    setMonth(yearToDate.to)
                  }}
                >
                  Year to date
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setDate(lastYear)
                    setMonth(lastYear.to)
                  }}
                >
                  Last year
                </Button>
              </div>
            </div>
          </div>
          <Calendar
            mode="range"
            selected={date}
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate)
              }
            }}
            month={month}
            onMonthChange={setMonth}
            className="p-2"
            disabled={[
              { after: today }, // Dates before today
            ]}
          />
        </div>
      </div>
      <p
        className="text-muted-foreground mt-4 text-center text-xs"
        role="region"
        aria-live="polite"
      >
        Range calendar with presets -{" "}
        <a
          className="hover:text-foreground underline"
          href="https://daypicker.dev/"
          target="_blank"
          rel="noopener nofollow"
        >
          React DayPicker
        </a>
      </p>
    </div>
  )
}
