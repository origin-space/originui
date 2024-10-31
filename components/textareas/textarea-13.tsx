"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCharacterLimit } from "@/hooks/use-character-limit";

export default function Textarea13() {
  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-13">Textarea with characters left</Label>
      <Textarea
        id="textarea-13"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby="characters-left-textarea"
      />
      <p
        id="characters-left-textarea"
        className="mt-2 text-xs text-muted-foreground text-right"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{limit - characterCount}</span> characters left
      </p>
    </div>
  );
}
