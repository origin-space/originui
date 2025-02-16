"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { useId, useState } from "react";

export default function Component() {
  const id = useId();
  const [selectedValue, setSelectedValue] = useState("on");

  return (
    <div className="bg-input/50 inline-flex h-9 rounded-lg p-0.5">
      <RadioGroup
        value={selectedValue}
        onValueChange={setSelectedValue}
        className="group after:bg-background after:outline-ring/30 dark:after:outline-ring/40 relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-md after:shadow-xs after:outline-offset-2 after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] has-focus-visible:after:outline-2 data-[state=off]:after:translate-x-0 data-[state=on]:after:translate-x-full"
        data-state={selectedValue}
      >
        <label className="group-data-[state=on]:text-muted-foreground/70 relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-4 whitespace-nowrap transition-colors select-none">
          Bill Monthly
          <RadioGroupItem id={`${id}-1`} value="off" className="sr-only" />
        </label>
        <label className="group-data-[state=off]:text-muted-foreground/70 relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-4 whitespace-nowrap transition-colors select-none">
          <span>
            Bill Yearly{" "}
            <span className="group-data-[state=off]:text-muted-foreground/70 transition-colors group-data-[state=on]:text-emerald-500">
              -20%
            </span>
          </span>
          <RadioGroupItem id={`${id}-2`} value="on" className="sr-only" />
        </label>
      </RadioGroup>
    </div>
  );
}
