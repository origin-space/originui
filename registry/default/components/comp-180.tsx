"use client"

import { useId, useState } from "react"

import { Switch } from "@/registry/default/ui/switch"

export default function Component() {
  const id = useId()
  const [checked, setChecked] = useState(false)

  const toggleSwitch = () => setChecked((prev) => !prev)

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(false)}
      >
        Off
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => setChecked(true)}
      >
        On
      </span>
    </div>
  )
}
