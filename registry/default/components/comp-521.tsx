"use client"

import { useState } from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/registry/default/ui/stepper"

const steps = [1, 2, 3, 4]

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <div className="space-y-3">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="flex-1">
              <StepperTrigger
                className="w-full flex-col items-start gap-2"
                asChild
              >
                <StepperIndicator
                  asChild
                  className="bg-border h-2 w-full rounded-none"
                >
                  <span className="sr-only">{step}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </Stepper>
        <div className="text-muted-foreground text-sm font-medium tabular-nums">
          Step {currentStep} of {steps.length}
        </div>
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
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Progress stepper
      </p>
    </div>
  )
}
