"use client";

import { useSliderWithInput } from "@/registry/default/hooks/use-slider-with-input";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  const minValue = 0;
  const maxValue = 100;
  const initialValue = [25];

  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
  } = useSliderWithInput({ minValue, maxValue, initialValue });

  return (
    <div className="space-y-4">
      <Label>Vertical slider with input</Label>
      <div className="flex h-40 flex-col items-center justify-center gap-4">
        <Slider
          className="data-[orientation=vertical]:min-h-0"
          value={sliderValue}
          onValueChange={handleSliderChange}
          min={minValue}
          max={maxValue}
          orientation="vertical"
          aria-label="Slider with input"
        />
        <Input
          className="h-8 w-12 px-2 py-1"
          type="text"
          inputMode="decimal"
          value={inputValues[0]}
          onChange={(e) => handleInputChange(e, 0)}
          onBlur={() => validateAndUpdateValue(inputValues[0], 0)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              validateAndUpdateValue(inputValues[0], 0);
            }
          }}
          aria-label="Enter value"
        />
      </div>
    </div>
  );
}
