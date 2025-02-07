import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
} from "@/registry/default/ui/stepper";
import { Shuffle, LoaderCircle } from "lucide-react";

export default function StepperDemo() {
  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      <Stepper defaultValue={2}>
        <StepperItem step={1} className="[&:not(:last-child)]:flex-1">
          <StepperTrigger>
            <StepperIndicator>
              <img
                className="rounded-full"
                src="/avatar-40-05.jpg"
                width={32}
                height={32}
                alt="Mike Palmer"
              />              
            </StepperIndicator>
          </StepperTrigger>
          <StepperSeparator className="group-data-[state=completed]/step:bg-primary mx-3" />
        </StepperItem>
        <StepperItem step={2} className="[&:not(:last-child)]:flex-1" loading>
          <StepperTrigger>
            <StepperIndicator>
              <span className="transition-all group-data-[loading=true]/step:opacity-0 group-data-[state=completed]/step:opacity-0 group-data-[loading=true]/step:scale-50 group-data-[state=completed]/step:scale-50">3</span>
              <span className="absolute transition-all scale-50 opacity-0 group-data-[loading=true]/step:opacity-100 group-data-[loading=true]/step:scale-100">
                <LoaderCircle className="animate-spin" size={16} strokeWidth={2} aria-hidden="true" />
              </span>              
            </StepperIndicator>
          </StepperTrigger>
          <StepperSeparator className="group-data-[state=completed]/step:bg-primary mx-3" />
        </StepperItem>        
        <StepperItem step={3} className="[&:not(:last-child)]:flex-1">
          <StepperTrigger>
            <StepperIndicator>
              <Shuffle size={16} strokeWidth={2} aria-hidden="true" />
              <span className="sr-only">Shuffle</span>
            </StepperIndicator>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Stepper with mixed elements
      </p>      
    </div>
  );
}