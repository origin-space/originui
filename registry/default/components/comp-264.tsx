"use client";

import { useSliderWithInput } from "@/registry/default/hooks/use-slider-with-input";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import { RotateCcw } from "lucide-react";
import React, { useRef } from "react";

export default function Component() {
  // Create refs to store reset functions
  const resetFunctionsRef = useRef<(() => void)[]>([]);

  // Function to reset all sliders to default
  const resetAll = () => {
    resetFunctionsRef.current.forEach((resetFn) => resetFn());
  };

  // Function to register reset functions
  const registerResetFunction = (resetFn: () => void, index: number) => {
    resetFunctionsRef.current[index] = resetFn;
  };

  return (
    <div className="space-y-4">
      <legend className="text-sm font-medium text-foreground">Object position</legend>
      <div className="space-y-2">
        <SliderWithInput
          minValue={-10}
          maxValue={10}
          initialValue={[-2]}
          defaultValue={[0]}
          label="X"
          onRegisterReset={(resetFn) => registerResetFunction(resetFn, 0)}
        />
        <SliderWithInput
          minValue={-10}
          maxValue={10}
          initialValue={[4]}
          defaultValue={[0]}
          label="Y"
          onRegisterReset={(resetFn) => registerResetFunction(resetFn, 1)}
        />
        <SliderWithInput
          minValue={-10}
          maxValue={10}
          initialValue={[2]}
          defaultValue={[0]}
          label="Z"
          onRegisterReset={(resetFn) => registerResetFunction(resetFn, 2)}
        />
      </div>
      <Button className="w-full" variant="outline" onClick={resetAll}>
        <RotateCcw className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Reset
      </Button>
    </div>
  );
}

function SliderWithInput({
  minValue,
  maxValue,
  initialValue,
  defaultValue,
  label,
  onRegisterReset,
}: {
  minValue: number;
  maxValue: number;
  initialValue: number[];
  defaultValue: number[];
  label: string;
  onRegisterReset: (resetFn: () => void) => void;
}) {
  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
  } = useSliderWithInput({ minValue, maxValue, initialValue, defaultValue });

  // Register the reset function when the component mounts
  React.useEffect(() => {
    onRegisterReset(resetToDefault);
  }, [onRegisterReset, resetToDefault]);

  return (
    <div className="flex items-center gap-2">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <Slider
        className="grow [&>:last-child>span]:rounded"
        value={sliderValue}
        onValueChange={handleSliderChange}
        min={minValue}
        max={maxValue}
        aria-label={label}
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
  );
}
