"use client"

import { useId } from "react"

import { useCharacterLimit } from "@/registry/default/hooks/use-character-limit"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  const maxLength = 50
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength })

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with character limit</Label>
      <div className="relative">
        <Input
          id={id}
          className="peer pe-14"
          type="text"
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          aria-describedby={`${id}-description`}
        />
        <div
          id={`${id}-description`}
          className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums peer-disabled:opacity-50"
          aria-live="polite"
          role="status"
        >
          {characterCount}/{limit}
        </div>
      </div>
    </div>
  )
}
