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
        <StepperItem key={step} step={step} className="[&:not(:last-child)]:flex-1 max-md:items-start">
          <StepperTrigger className="max-md:flex-col">
            <StepperIndicator>{step}</StepperIndicator>
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
  );
}