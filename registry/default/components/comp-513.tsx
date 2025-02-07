import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
} from "@/registry/default/ui/stepper";

const steps = [1, 2, 3, 4];

export default function StepperDemo() {
  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      <Stepper defaultValue={1}>
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1">
            <StepperTrigger>
              <StepperIndicator>{step}</StepperIndicator>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Uncontrolled stepper with buttons
      </p>      
    </div>
  );
}