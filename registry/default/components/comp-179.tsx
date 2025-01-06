"use client";

import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { useId, useState } from "react";

export default function Component() {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={setChecked} aria-label="Toggle switch" />
      <Label htmlFor={id} className="text-sm font-medium">
        {checked ? "On" : "Off"}
      </Label>
    </div>
  );
}
