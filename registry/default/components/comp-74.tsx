"use client"

import { useId } from "react"

import { useCharacterLimit } from "@/registry/default/hooks/use-character-limit"
import { Label } from "@/registry/default/ui/label"
import { Textarea } from "@/registry/default/ui/textarea"

export default function Component() {
  const id = useId()
  const maxLength = 180
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength })

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Textarea with characters left</Label>
      <Textarea
        id={id}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby={`${id}-description`}
      />
      <p
        id={`${id}-description`}
        className="text-muted-foreground mt-2 text-right text-xs"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{limit - characterCount}</span>{" "}
        characters left
      </p>
    </div>
  )
}
