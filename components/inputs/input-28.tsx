"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, useMemo, useState } from "react";

interface NumberInputProps {
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
}

export default function InputDemo({
  defaultValue = 2.048,
  minValue = 0,
  maxValue,
  step,
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState(defaultValue.toString());

  const { precision, effectiveStep } = useMemo(() => {
    const calculatePrecision = (num: number) => {
      const decimalPart = num.toString().split(".")[1];
      return decimalPart?.length || 0;
    };

    const parsedValue = parseFloat(inputValue);
    const activePrecision = !isNaN(parsedValue)
      ? calculatePrecision(parsedValue)
      : calculatePrecision(step ?? defaultValue);

    return {
      precision: activePrecision,
      effectiveStep: step ?? Math.pow(10, -activePrecision),
    };
  }, [inputValue, step, defaultValue]);

  const validateValue = (value: number) => {
    return Math.min(Math.max(value, minValue ?? -Infinity), maxValue ?? Infinity);
  };

  const adjustValue = (isIncrement: boolean) => {
    const currentValue = parseFloat(inputValue) || 0;
    const multiplier = Math.pow(10, precision);

    const newValue = validateValue(
      (Math.round(currentValue * multiplier) +
        Math.round(effectiveStep * multiplier) * (isIncrement ? 1 : -1)) /
        multiplier,
    );

    setInputValue(newValue.toFixed(precision));
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (/^-?\d*\.?\d*$/.test(value) || /^[-.]$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleBlur = () => {
    const parsedValue = parseFloat(inputValue);
    if (isNaN(parsedValue)) {
      setInputValue(defaultValue.toFixed(precision));
      return;
    }
    setInputValue(validateValue(parsedValue).toFixed(precision));
  };

  const buttonBaseClass = cn(
    "flex h-full w-9 items-center justify-center border-input bg-background text-foreground",
    "hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50",
  );

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">
        Number input with plus/minus buttons
      </label>
      <div
        className={cn(
          "flex h-9 w-full items-center rounded-md border border-input bg-transparent px-0",
          "shadow-sm transition-colors focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20",
        )}
      >
        <button
          onClick={() => adjustValue(false)}
          className={cn(buttonBaseClass, "rounded-l-md border-r")}
          disabled={minValue !== undefined && parseFloat(inputValue) <= minValue}
        >
          <Minus size={16} strokeWidth={2} aria-hidden="true" />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            "h-full w-full bg-transparent text-center text-sm",
            "placeholder:text-muted-foreground",
            "focus:outline-none",
          )}
          min={minValue}
          max={maxValue}
          pattern="^-?\d*\.?\d*$"
        />
        <button
          onClick={() => adjustValue(true)}
          className={cn(buttonBaseClass, "rounded-r-md border-l")}
          disabled={maxValue !== undefined && parseFloat(inputValue) >= maxValue}
        >
          <Plus size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
