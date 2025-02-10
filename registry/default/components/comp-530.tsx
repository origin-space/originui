"use client";

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/registry/default/ui/stepper";
import { Button } from "@/registry/default/ui/button";
import { useState } from "react";
const steps = [1, 2, 3, 4];

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <div className="space-y-3">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="flex-1">
              <StepperTrigger className="w-full flex-col items-start gap-2" asChild>
                <StepperIndicator asChild className="h-2 w-full bg-border rounded-none">
                  <span className="sr-only">{step}</span>
                </StepperIndicator>        
              </StepperTrigger>
            </StepperItem>
          ))}
        </Stepper>
        <div className="text-sm font-medium text-muted-foreground tabular-nums">Step {currentStep} of {steps.length}</div>
      </div>
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
          disabled={currentStep >= steps.length}
        >
          Next step
        </Button>
      </div>      
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Stepper with numbers only
      </p>
    </div>
  );
}
