"use client"

import { useState } from "react"

import { Label } from "@/registry/default/ui/label"
import { Slider } from "@/registry/default/ui/slider"

export default function Component() {
  const [value, setValue] = useState([3])

  const emojis = ["😡", "🙁", "😐", "🙂", "😍"]
  const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"]

  return (
    <div className="*:not-first:mt-3">
      <Label>Rate your experience</Label>
      <div className="flex items-center gap-2">
        <Slider
          value={value}
          onValueChange={setValue}
          min={1}
          max={5}
          showTooltip
          tooltipContent={(value) => labels[value - 1]}
          aria-label="Rate your experience"
        />
        <span className="text-2xl">{emojis[value[0] - 1]}</span>
      </div>
    </div>
  )
}
