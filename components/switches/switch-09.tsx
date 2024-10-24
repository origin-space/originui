"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Switch09() {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="switch-09"
        checked={checked}
        onCheckedChange={setChecked}
        aria-label="Toggle switch"
      />
      <Label htmlFor="switch-09" className="text-sm font-medium">
        {checked ? "On" : "Off"}
      </Label>
    </div>
  );
}
