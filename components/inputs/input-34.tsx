"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCharacterLimit } from "@/hooks/use-character-limit";

export default function Input34() {
  const maxLength = 50;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="space-y-2">
      <Label htmlFor="input-34">Input with character limit</Label>
      <div className="relative">
        <Input
          id="input-34"
          className="peer pe-14"
          type="text"
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          aria-describedby="character-count"
        />
        <div
          id="character-count"
          className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50"
          aria-live="polite"
          role="status"
        >
          {characterCount}/{limit}
        </div>
      </div>
    </div>
  );
}
