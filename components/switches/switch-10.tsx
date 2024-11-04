// Dependencies: pnpm install lucide-react

"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Switch11() {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id="switch-11"
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle switch"
      />
      <Label htmlFor="switch-11">
        <span className="sr-only">Toggle switch</span>
        {checked ? (
          <Sun size={16} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Moon size={16} strokeWidth={2} aria-hidden="true" />
        )}
      </Label>
    </div>
  );
}
