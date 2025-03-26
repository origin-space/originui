import {
  Stepper,
  StepperIndicator,
  StepperItem,
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
  {
    step: 4,
    title: "Step Four",
  },
]

export default function Component() {
  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <Stepper defaultValue={2} className="items-start gap-4">
        {steps.map(({ step, title }) => (
          <StepperItem key={step} step={step} className="flex-1">
            <StepperTrigger className="w-full flex-col items-start gap-2 rounded">
              <StepperIndicator asChild className="bg-border h-1 w-full">
                <span className="sr-only">{step}</span>
              </StepperIndicator>
              <div className="space-y-0.5">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
          </StepperItem>
        ))}
      </Stepper>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Stepper with labels
      </p>
    </div>
  )
}
