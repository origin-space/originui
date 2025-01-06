"use client";

import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useId, useState } from "react";

export default function Component() {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={setChecked} aria-label="Toggle switch" />
      <Label htmlFor={id}>
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
