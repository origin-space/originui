import {
  Stepper,
  StepperDescription,
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
    description: "Desc for step one",
  },
  {
    step: 2,
    title: "Step Two",
    description: "Desc for step two",
  },
  {
    step: 3,
    title: "Step Three",
    description: "Desc for step three",
  },
]

export default function Component() {
  return (
    <div className="space-y-8 text-center">
      <Stepper defaultValue={2}>
        {steps.map(({ step, title, description }) => (
          <StepperItem
            key={step}
            step={step}
            className="relative flex-1 flex-col!"
          >
            <StepperTrigger className="flex-col gap-3 rounded">
              <StepperIndicator />
              <div className="space-y-0.5 px-2">
                <StepperTitle>{title}</StepperTitle>
                <StepperDescription className="max-sm:hidden">
                  {description}
                </StepperDescription>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Stepper with titles and descriptions
      </p>
    </div>
  )
}
