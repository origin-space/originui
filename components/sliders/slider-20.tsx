"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useSliderWithInput } from "@/hooks/use-slider-with-input";

export default function Slider20() {
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
      <div className="flex flex-col items-center justify-center gap-4">
        <Slider
          value={sliderValue} 
          onValueChange={handleSliderChange} 
          min={minValue}
          max={maxValue}
          orientation="vertical" 
          aria-label="Slider with input"
        />
        <Input 
          className="w-12 px-2 py-1 h-8"
          type="text"
          inputMode="decimal"
          value={inputValues[0]}
          onChange={(e) => handleInputChange(e, 0)}
          onBlur={() => validateAndUpdateValue(inputValues[0], 0)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              validateAndUpdateValue(inputValues[0], 0);
            }
          }}
          aria-label="Enter value"
        />        
      </div>
    </div>
  );
}
