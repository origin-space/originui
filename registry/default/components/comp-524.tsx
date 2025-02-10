import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Step One",
  },
  {
    step: 2,
    title: "Step Two",
  },
  {
    step: 3,
    title: "Step Three",
  },
  {
    step: 4,
    title: "Step Four",
  },
];

export default function Component() {
  return (
    <div className="space-y-8 text-center">
      <Stepper defaultValue={1} orientation="vertical">
        {steps.map(({ step, title }) => (
          <StepperItem key={step} step={step} className="relative items-start [&:not(:last-child)]:flex-1">
            <StepperTrigger className="items-start pb-12 last:pb-0">
              <StepperIndicator />
              <div className="text-left px-2 mt-0.5">
                <StepperTitle>{title}</StepperTitle>
              </div>              
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
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
