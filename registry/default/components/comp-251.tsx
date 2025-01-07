"use client";

import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { useState } from "react";

export default function Component() {
  const [value, setValue] = useState([25, 75]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">Dual range slider with output</Label>
        <output className="text-sm font-medium tabular-nums">
          {value[0]} - {value[1]}
        </output>
      </div>
      <Slider value={value} onValueChange={setValue} aria-label="Dual range slider with output" />
    </div>
  );
}
