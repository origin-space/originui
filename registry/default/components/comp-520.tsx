"use client";

import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
} from "@/registry/default/ui/stepper";
import { Button } from "@/registry/default/ui/button";
import { Check, LoaderCircle } from "lucide-react";
import { useState } from "react";

const steps = [1, 2, 3, 4];

export default function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      <Stepper
        value={currentStep}
        onValueChange={setCurrentStep}
      >
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1" loading={isLoading && currentStep === step}>
            <StepperTrigger asChild>
              <StepperIndicator className="transition-none">
                <span className="transition-all group-data-[loading=true]/step:opacity-0 group-data-[state=completed]/step:opacity-0 group-data-[loading=true]/step:scale-50 group-data-[state=completed]/step:scale-50">{step}</span>
                <Check className="absolute transition-all scale-50 opacity-0 group-data-[state=completed]/step:opacity-100 group-data-[state=completed]/step:scale-100" size={16} strokeWidth={2} aria-hidden="true" />
                <span className="absolute transition-all scale-50 opacity-0 group-data-[loading=true]/step:opacity-100 group-data-[loading=true]/step:scale-100">
                  <LoaderCircle className="animate-spin" size={16} strokeWidth={2} aria-hidden="true" />
                </span>
              </StepperIndicator>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary transition-none" />
            )}
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
          onClick={handleNextStep}
          disabled={currentStep > steps.length}
        >
          Next step          
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Controlled stepper with checkmarks and loading state
      </p>       
    </div>
  );
}