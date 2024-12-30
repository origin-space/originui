"use client";

import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { useState } from "react";

export default function Component() {
  const [value, setValue] = useState([3]);

  const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">Rate your experience</Label>
        <span className="text-sm font-medium">{labels[value[0] - 1]}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl">😡</span>
        <Slider
          value={value}
          onValueChange={setValue}
          min={1}
          max={5}
          aria-label="Rate your experience"
        />
        <span className="text-2xl">😍</span>
      </div>
    </div>
  );
}
