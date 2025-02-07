import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator,
} from "@/registry/default/ui/stepper";
import { Check } from "lucide-react";

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
          <StepperTrigger className="max-md:flex-col gap-4">
            <StepperIndicator className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-ring transition-none">
              <span className="transition-all group-data-[state=completed]/step:opacity-0 group-data-[state=completed]/step:scale-50">{step}</span>
              <Check className="absolute transition-all scale-50 opacity-0 group-data-[state=completed]/step:opacity-100 group-data-[state=completed]/step:scale-100" size={16} strokeWidth={2} aria-hidden="true" />
            </StepperIndicator>
            <div className="text-center md:text-left md:-order-1">
              <StepperTitle>{title}</StepperTitle>
              <StepperDescription className="max-sm:hidden">
                {description}
              </StepperDescription>
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