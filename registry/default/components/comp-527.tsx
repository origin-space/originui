import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [1, 2, 3, 4];

export default function Component() {
  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <Stepper defaultValue={2}>
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1">
            <StepperTrigger>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Stepper with numbers and checkmarks for completed steps
      </p>
    </div>
  );
}
