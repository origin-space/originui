"use client"

import { useState } from "react"
import { Volume2Icon, VolumeXIcon } from "lucide-react"

import { Label } from "@/registry/default/ui/label"
import { Slider } from "@/registry/default/ui/slider"

export default function Component() {
  const [value, setValue] = useState([25])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">Volume</Label>
        <output className="text-sm font-medium tabular-nums">{value[0]}</output>
      </div>
      <div className="flex items-center gap-2">
        <VolumeXIcon
          className="shrink-0 opacity-60"
          size={16}
          aria-hidden="true"
        />
        <Slider
          value={value}
          onValueChange={setValue}
          aria-label="Volume slider"
        />
        <Volume2Icon
          className="shrink-0 opacity-60"
          size={16}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
