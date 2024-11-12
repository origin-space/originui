"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Slider15() {
  const [value, setValue] = useState([3]);

  const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label>Rate your experience</Label>
        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {labels[value[0] - 1]}
        </span>
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
