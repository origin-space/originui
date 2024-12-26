"use client";

import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { useState } from "react";

export default function SwitchDemo() {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id="switch-08"
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle switch"
      />
      <Label htmlFor="switch-08" className="text-sm font-medium">
        {checked ? "On" : "Off"}
      </Label>
    </div>
  );
}
