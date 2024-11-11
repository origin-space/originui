"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Switch09() {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked((prev) => !prev);

  return (
    <div>
      <Label htmlFor="switch-09" className="sr-only">
        Toggle switch
      </Label>
      <div
        className="group inline-flex items-center gap-2"
        data-state={checked ? "checked" : "unchecked"}
      >
        <span
          id="switch-off-label"
          className="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
          onClick={() => setChecked(false)}
        >
          Off
        </span>
        <Switch
          id="switch-09"
          checked={checked}
          onCheckedChange={toggleSwitch}
          aria-labelledby="switch-off-label switch-on-label"
        />
        <span
          id="switch-on-label"
          className="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
          onClick={() => setChecked(true)}
        >
          On
        </span>
      </div>
    </div>
  );
}
