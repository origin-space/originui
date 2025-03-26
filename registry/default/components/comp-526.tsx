import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/registry/default/ui/stepper"

const steps = [1, 2, 3, 4]

export default function Component() {
  return (
    <div className="space-y-8 text-center">
      <Stepper defaultValue={2} orientation="vertical">
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="not-last:flex-1">
            <StepperTrigger>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Vertical stepper with numbers and checkmarks
      </p>
    </div>
  )
}
