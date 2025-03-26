import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/registry/default/ui/stepper"

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
]

export default function Component() {
  return (
    <div className="space-y-8 text-center">
      <Stepper defaultValue={2}>
        {steps.map(({ step, title }) => (
          <StepperItem
            key={step}
            step={step}
            className="not-last:flex-1 max-md:items-start"
          >
            <StepperTrigger className="rounded max-md:flex-col">
              <StepperIndicator />
              <div className="text-center md:text-left">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Stepper with inline titles
      </p>
    </div>
  )
}
