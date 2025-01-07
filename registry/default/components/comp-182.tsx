"use client";

import { Switch } from "@/registry/default/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useId, useState } from "react";

export default function Component() {
  const id = useId();
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => setChecked((prev) => !prev);

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
        aria-controls={id}
        onClick={() => setChecked(false)}
      >
        <Moon size={16} strokeWidth={2} aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
        aria-controls={id}
        onClick={() => setChecked(true)}
      >
        <Sun size={16} strokeWidth={2} aria-hidden="true" />
      </span>
    </div>
  );
}
