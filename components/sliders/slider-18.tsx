"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useSliderWithInput } from "@/hooks/use-slider-with-input";

export default function Slider18() {
  const minValue = 0;
  const maxValue = 200;
  const initialValue = [50, 150];

  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
  } = useSliderWithInput({ minValue, maxValue, initialValue });

  return (
    <div className="space-y-4">
      <Label>Slider with input</Label>
      <div className="flex items-center gap-4">
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
          aria-label="Enter minimum value"
        />
        <Slider 
          className="flex-grow"
          value={sliderValue} 
          onValueChange={handleSliderChange} 
          min={minValue}
          max={maxValue} 
          aria-label="Slider with input"
        />
        <Input 
          className="w-12 px-2 py-1 h-8"
          type="text"
          inputMode="decimal"
          value={inputValues[1]}
          onChange={(e) => handleInputChange(e, 1)}
          onBlur={() => validateAndUpdateValue(inputValues[1], 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              validateAndUpdateValue(inputValues[1], 1);
            }
          }}
          aria-label="Enter maximum value"
        />
      </div>
    </div>
  );
}