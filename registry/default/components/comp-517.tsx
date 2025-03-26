"use client"

import { useState } from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/registry/default/ui/stepper"

const steps = [1, 2, 3, 4]

export default function Component() {
  const [currentStep, setCurrentStep] = useState(2)
  const [isLoading, setIsLoading] = useState(false)

  const handleNextStep = () => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        {steps.map((step) => (
          <StepperItem
            key={step}
            step={step}
            className="not-last:flex-1"
            loading={isLoading}
          >
            <StepperTrigger asChild>
              <StepperIndicator />
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
          onClick={handleNextStep}
          disabled={currentStep > steps.length}
        >
          Next step
        </Button>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Controlled stepper with checkmarks and loading state
      </p>
    </div>
  )
}
