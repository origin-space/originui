"use client";

import { Label } from "@/components/ui/label";
import { SliderWithTooltip } from "@/components/ui/slider-with-tooltip";
import { useState } from "react";

export default function Slider16() {
  const [value, setValue] = useState([3]);

  const emojis = ["😡", "🙁", "😐", "🙂", "😍"];
  const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <Label>Rate your experience</Label>
      </div>
      <div className="flex items-center gap-2">
        <SliderWithTooltip 
          value={value} 
          onValueChange={setValue} 
          min={1} 
          max={5} 
          showTooltip
          tooltipContent={(value) => labels[value - 1]}
          aria-label="Rate your experience"
        />
        <span className="text-2xl">{emojis[value[0] - 1]}</span>        
      </div>
    </div>
  );
}
