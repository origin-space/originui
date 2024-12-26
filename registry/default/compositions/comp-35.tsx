"use client";

import { useCharacterLimit } from "@/registry/default/hooks/use-character-limit";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  const maxLength = 8;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="space-y-2">
      <Label htmlFor="input-35">Input with characters left</Label>
      <Input
        id="input-35"
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        aria-describedby="characters-left"
      />
      <p
        id="characters-left"
        className="mt-2 text-xs text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        <span className="tabular-nums">{limit - characterCount}</span> characters left
      </p>
    </div>
  );
}
