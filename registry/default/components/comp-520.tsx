"use client"

import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/registry/default/ui/stepper"

const steps = [1, 2, 3, 4]

export default function Component() {
  const [currentStep, setCurrentStep] = useState(2)

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <div className="flex items-center gap-2">
        <Button
          className="shrink-0"
          variant="ghost"
          size="icon"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
          aria-label="Prev step"
        >
          <ChevronLeftIcon size={16} aria-hidden="true" />
        </Button>
        <Stepper
          value={currentStep}
          onValueChange={setCurrentStep}
          className="gap-1"
        >
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="flex-1">
              <StepperTrigger
                className="w-full flex-col items-start gap-2"
                asChild
              >
                <StepperIndicator asChild className="bg-border h-1 w-full">
                  <span className="sr-only">{step}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </Stepper>
        <Button
          className="shrink-0"
          variant="ghost"
          size="icon"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep === steps.length}
          aria-label="Next step"
        >
          <ChevronRightIcon size={16} aria-hidden="true" />
        </Button>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Paginated stepper
      </p>
    </div>
  )
}
