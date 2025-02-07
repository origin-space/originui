import {
  Stepper,
  StepperDescription,
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
];

export default function Component() {
  return (
    <Stepper defaultValue={1}>
      {steps.map(({ step, title, description }) => (
        <StepperItem key={step} step={step} className="relative flex-1 !flex-col">
          <StepperTrigger className="flex-col gap-3">
            <StepperIndicator />
            <div className="space-y-0.5 px-2">
              <StepperTitle>{title}</StepperTitle>
              <StepperDescription className="max-sm:hidden">{description}</StepperDescription>
            </div>
          </StepperTrigger>
          {step < steps.length && (
            <StepperSeparator className="absolute inset-x-0 left-[calc(50%+0.75rem+0.125rem)] top-3 -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
          )}
        </StepperItem>
      ))}
    </Stepper>
  );
}
