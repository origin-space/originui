"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer focus-visible:outline-ring/70 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent outline-offset-2 transition-colors focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "bg-background pointer-events-none block size-5 rounded-full ring-0 shadow-xs transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:rtl:-translate-x-4",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
