"use client";

import { useCharacterLimit } from "@/registry/default/hooks/use-character-limit";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-16">Textarea with characters left</Label>
      <Textarea
        id="textarea-16"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby="characters-left-textarea"
      />
      <p
        id="characters-left-textarea"
        className="mt-2 text-right text-xs text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{limit - characterCount}</span> characters left
      </p>
    </div>
  );
}
