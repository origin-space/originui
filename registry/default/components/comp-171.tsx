"use client"

import { useId, useState } from "react"
import { RiStarFill } from "@remixicon/react"

import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function Component() {
  const id = useId()
  const [hoverRating, setHoverRating] = useState("")
  const [currentRating, setCurrentRating] = useState("")

  return (
    <fieldset className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">
        Rate your experience
      </legend>
      <RadioGroup
        className="inline-flex gap-0"
        onValueChange={setCurrentRating}
      >
        {["1", "2", "3", "4", "5"].map((value) => (
          <label
            key={value}
            className="group has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative cursor-pointer rounded p-0.5 outline-none has-focus-visible:ring-[3px]"
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating("")}
          >
            <RadioGroupItem
              id={`${id}-${value}`}
              value={value}
              className="sr-only"
            />
            <RiStarFill
              size={24}
              className={`transition-all ${
                (hoverRating || currentRating) >= value
                  ? "text-amber-500"
                  : "text-input"
              } group-hover:scale-110`}
            />
            <span className="sr-only">
              {value} star{value === "1" ? "" : "s"}
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
