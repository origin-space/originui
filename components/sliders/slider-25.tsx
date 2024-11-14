"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useSliderWithInput } from "@/hooks/use-slider-with-input";
import { RotateCcw } from "lucide-react";
import React from "react";

type SliderHandlerRef = {
  handleReset: () => void;
};

export default function Slider25() {
  const sliderXRef = React.useRef<SliderHandlerRef>();
  const sliderYRef = React.useRef<SliderHandlerRef>();
  const sliderZRef = React.useRef<SliderHandlerRef>();

  const reset = () => {
    sliderXRef.current?.handleReset();
    sliderYRef.current?.handleReset();
    sliderZRef.current?.handleReset();
  };

  return (
    <div className="space-y-4">
      <legend className="text-sm font-medium text-foreground">Object position</legend>
      <div className="space-y-2">
        <SliderWithInput
          minValue={-10}
          maxValue={10}
          initialValue={[-2]}
          label="X"
          handlerRef={sliderXRef}
        />
        <SliderWithInput
          minValue={-10}
          maxValue={10}
          initialValue={[4]}
          label="Y"
          handlerRef={sliderYRef}
        />
        <SliderWithInput
          minValue={-10}
          maxValue={10}
          initialValue={[2]}
          label="Z"
          handlerRef={sliderZRef}
        />
      </div>
      <Button className="w-full" variant="outline" onClick={reset}>
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
  label,
  handlerRef,
}: {
  minValue: number;
  maxValue: number;
  initialValue: number[];
  label: string;
  handlerRef: React.MutableRefObject<SliderHandlerRef | undefined>;
}) {
  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
  } = useSliderWithInput({ minValue, maxValue, initialValue });

  // Expose reset handler to parent
  React.useEffect(() => {
    handlerRef.current = {
      handleReset: () => handleSliderChange([0]),
    };
  }, [handleSliderChange]);

  return (
    <div className="flex items-center gap-2">
      <Label>{label}</Label>
      <Slider
        className="flex-grow [&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
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
