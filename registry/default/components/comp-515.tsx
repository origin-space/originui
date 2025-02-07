"use client";

import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
} from "@/registry/default/ui/stepper";
import { Button } from "@/registry/default/ui/button";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useState } from "react";

const steps = [1, 2, 3, 4];

export default function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      <Stepper
        value={currentStep}
        onValueChange={setCurrentStep}
      >
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1">
            <StepperTrigger asChild>
              <StepperIndicator>{step}</StepperIndicator>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep(1)}
        >
          Reset
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
        Controlled stepper
      </p>       
    </div>
  );
}