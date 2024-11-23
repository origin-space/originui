// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function SliderDemo() {
  const minValue = 0;
  const maxValue = 200;
  const steps = 5;
  const [value, setValue] = useState([100]);

  const decreaseValue = () => setValue((prev) => [Math.max(minValue, prev[0] - steps)]);
  const increaseValue = () => setValue((prev) => [Math.min(maxValue, prev[0] + steps)]);

  return (
    <div className="space-y-3">
      <Label className="tabular-nums">{value[0]} credits/mo</Label>
      <div className="flex items-center gap-4">
        <div>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Decrease value"
            onClick={decreaseValue}
            disabled={value[0] === 0}
          >
            <Minus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
        <Slider
          className="flex-grow"
          value={value}
          onValueChange={setValue}
          min={minValue}
          max={maxValue}
          step={steps}
          aria-label="Dual range slider with buttons"
        />
        <div>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Increase value"
            onClick={increaseValue}
            disabled={value[0] === 200}
          >
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
