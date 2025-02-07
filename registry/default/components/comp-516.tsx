import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,  
  StepperDescription,
  StepperSeparator,
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


export default function StepperDemo() {
  return (
    <Stepper defaultValue={1}>
      {steps.map(({ step, title, description }) => (
        <StepperItem key={step} step={step} className="flex-1 !flex-col">
          <StepperTrigger className="flex-col gap-3">
            <StepperIndicator>{step}</StepperIndicator>
            <div className="space-y-0.5 px-2">
              <StepperTitle>{title}</StepperTitle>
              <StepperDescription className="max-sm:hidden">{description}</StepperDescription>
            </div>
          </StepperTrigger>
          {step < steps.length && (
            <StepperSeparator className="group-data-[state=completed]/step:bg-primary relative w-[calc(100%-2rem)] left-1/2 top-4 flex-none -order-1" />
          )}
        </StepperItem>
      ))}
    </Stepper>
  );
}