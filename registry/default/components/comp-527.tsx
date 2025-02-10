"use client";

import { Button } from "@/registry/default/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/registry/default/ui/stepper";
import { Check, LoaderCircle } from "lucide-react";
import { useState } from "react";

const steps = [1, 2, 3, 4];

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="space-y-8 text-center">
      <Stepper value={currentStep} onValueChange={setCurrentStep} orientation="vertical">
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1">
            <StepperTrigger asChild>
              <StepperIndicator>
                <span className="transition-all group-data-[loading=true]/step:scale-50 group-data-[state=completed]/step:scale-50 group-data-[loading=true]/step:opacity-0 group-data-[state=completed]/step:opacity-0">
                  {step}
                </span>
                <Check
                  className="absolute scale-50 opacity-0 transition-all group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="absolute scale-50 opacity-0 transition-all group-data-[loading=true]/step:scale-100 group-data-[loading=true]/step:opacity-100">
                  <LoaderCircle
                    className="animate-spin"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </StepperIndicator>
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep > steps.length}
        >
          Next step
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Controlled vertical stepper with checkmarks
      </p>
    </div>
  );
}
