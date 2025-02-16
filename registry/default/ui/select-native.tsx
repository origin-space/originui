import { cn } from "@/registry/default/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const SelectNative = ({ className, children, ...props }: React.ComponentProps<"select">) => {
  return (
    <div className="relative flex">
      <select
        data-slot="select-native"
        className={cn(
          "peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border border-input bg-background text-sm text-foreground shadow-xs transition-shadow focus-visible:border-ring/40 focus-visible:outline-hidden focus-visible:ring-[3px] ring-ring/8 dark:ring-ring/12 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none has-[option[disabled]:checked]:text-muted-foreground aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25",
          props.multiple
            ? "py-1 *:px-3 *:py-1 [&_option:checked]:bg-accent"
            : "h-9 pe-8 ps-3",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {!props.multiple && (
        <span className="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50 peer-aria-invalid:text-destructive/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      )}
    </div>
  );
};

export { SelectNative };
