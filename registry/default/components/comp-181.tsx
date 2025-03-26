"use client"

import { useId, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Label } from "@/registry/default/ui/label"
import { Switch } from "@/registry/default/ui/switch"

export default function Component() {
  const id = useId()
  const [checked, setChecked] = useState<boolean>(true)

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle switch"
      />
      <Label htmlFor={id}>
        <span className="sr-only">Toggle switch</span>
        {checked ? (
          <SunIcon size={16} aria-hidden="true" />
        ) : (
          <MoonIcon size={16} aria-hidden="true" />
        )}
      </Label>
    </div>
  )
}
