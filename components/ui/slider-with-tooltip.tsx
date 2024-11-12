"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SliderWithTooltip = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    showTooltip?: boolean;
  }
>(({ className, showTooltip = false, ...props }, ref) => {
  const [value, setValue] = React.useState<number[]>(
    (props.defaultValue as number[]) ?? [0],
  );
  const [showTooltipState, setShowTooltipState] = React.useState(false);

  const handlePointerDown = () => {
    setShowTooltipState(true);    
  };

  const handlePointerUp = () => {
    setShowTooltipState(false);
  };

  React.useEffect(() => {
    document.addEventListener("pointerup", handlePointerUp);
    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50", className)}
      onValueChange={setValue}
      onPointerDown={handlePointerDown}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      {value?.map((_, i) => (
        <TooltipProvider key={i}>
          <Tooltip open={showTooltip && showTooltipState}>
            <TooltipTrigger asChild>
              <SliderPrimitive.Thumb
                key={i}
                className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-shadows focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed"
              />
            </TooltipTrigger>
            <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
              <p>{value[i]}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </SliderPrimitive.Root>
  );
});
SliderWithTooltip.displayName = SliderPrimitive.Root.displayName;

export { SliderWithTooltip };
