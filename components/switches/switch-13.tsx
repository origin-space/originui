"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Switch13() {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <div>
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id="switch-13"
          checked={checked}
          onCheckedChange={setChecked}
          className="peer absolute inset-0 h-[inherit] w-auto rounded-lg data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-md [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full"
        />
        <span className="pointer-events-none relative ms-0.5 min-w-8 px-4 text-center peer-data-[state=checked]:text-muted-foreground/70">
          Bill Monthly
        </span>
        <span className="pointer-events-none relative me-0.5 min-w-8 px-4 text-center peer-data-[state=unchecked]:text-muted-foreground/70 [&_span]:peer-data-[state=checked]:text-emerald-500">
          Bill Yearly <span>-20%</span>
        </span>
      </div>
      <Label htmlFor="switch-13" className="sr-only">
        Labeled switch
      </Label>
    </div>
  );
}
