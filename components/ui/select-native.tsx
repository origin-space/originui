import { cn } from "@/lib/utils";
import * as React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectPropsNative extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectPropsNative>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "peer inline-flex w-full appearance-none items-center rounded-lg border border-input bg-background text-sm text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow cursor-pointer focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 has-[option[disabled]:checked]:text-muted-foreground/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            props.multiple ? "[&>*]:px-3 [&>*]:py-1 py-1 [&_option:checked]:bg-accent" : "h-9 ps-3 pe-8",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {!props.multiple && (
          <span className="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        )}
      </div>
    );
  },
);
SelectNative.displayName = "SelectNative";

export { SelectNative };
