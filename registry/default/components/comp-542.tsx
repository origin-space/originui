"use client"

import { useState } from "react"
import { addDays, setHours, setMinutes } from "date-fns"

import {
  FullCalendar,
  type CalendarEvent,
} from "@/registry/default/components/full-calendar"

// Sample events data with hardcoded times
const sampleEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Meeting",
    description: "Weekly team sync",
    start: setMinutes(setHours(new Date(), 10), 0), // 10:00 AM today
    end: setMinutes(setHours(new Date(), 11), 0), // 11:00 AM today
    color: "sky",
    location: "Conference Room A",
  },
  {
    id: "2",
    title: "Lunch with Client",
    description: "Discuss new project requirements",
    start: setMinutes(setHours(addDays(new Date(), 1), 12), 0), // 12:00 PM tomorrow
    end: setMinutes(setHours(addDays(new Date(), 1), 13), 15), // 1:15 PM tomorrow
    color: "emerald",
    location: "Downtown Cafe",
  },
  {
    id: "3",
    title: "Product Launch",
    description: "New product release",
    start: addDays(new Date(), 3),
    end: addDays(new Date(), 6),
    allDay: true,
    color: "violet",
  },
  {
    id: "4",
    title: "Call with Lisa",
    description: "Discuss about new clients",
    start: setMinutes(setHours(addDays(new Date(), 4), 14), 30), // 2:30 PM
    end: setMinutes(setHours(addDays(new Date(), 5), 14), 45), // 2:45 PM
    color: "rose",
    location: "Downtown Cafe",
  },
  {
    id: "5",
    title: "Team Meeting",
    description: "Weekly team sync",
    start: setMinutes(setHours(addDays(new Date(), 5), 9), 0), // 9:00 AM
    end: setMinutes(setHours(addDays(new Date(), 5), 10), 30), // 10:30 AM
    color: "orange",
    location: "Conference Room A",
  },
  {
    id: "6",
    title: "Review contracts",
    description: "Weekly team sync",
    start: setMinutes(setHours(addDays(new Date(), 5), 14), 0), // 2:00 PM
    end: setMinutes(setHours(addDays(new Date(), 5), 15), 30), // 3:30 PM
    color: "sky",
    location: "Conference Room A",
  },
  {
    id: "7",
    title: "Team Meeting",
    description: "Weekly team sync",
    start: setMinutes(setHours(addDays(new Date(), 5), 9), 45), // 9:45 AM
    end: setMinutes(setHours(addDays(new Date(), 5), 11), 0), // 11:00 AM
    color: "amber",
    location: "Conference Room A",
  },
]

export default function Component() {
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents)

  const handleEventAdd = (event: CalendarEvent) => {
    setEvents([...events, event])
  }

  const handleEventUpdate = (updatedEvent: CalendarEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    )
  }

  const handleEventDelete = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  return (
    <FullCalendar
      events={events}
      onEventAdd={handleEventAdd}
      onEventUpdate={handleEventUpdate}
      onEventDelete={handleEventDelete}
    />
  )
}
