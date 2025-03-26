"use client"

import { useState } from "react"
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group"

export default function Component() {
  const [value, setValue] = useState<string>("center")

  return (
    <ToggleGroup
      className="divide-background inline-flex divide-x"
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value)
      }}
    >
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Left"
        value="left"
      >
        <AlignLeftIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Center"
        value="center"
      >
        <AlignCenterIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Right"
        value="right"
      >
        <AlignRightIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="bg-primary/80 text-primary-foreground hover:bg-primary hover:text-primary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        aria-label="Align Justify"
        value="justify"
      >
        <AlignJustifyIcon size={16} aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
