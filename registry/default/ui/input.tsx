import { cn } from "@/registry/default/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input bg-background placeholder:text-muted-foreground/70 focus-visible:border-ring/40 ring-ring/8 dark:ring-ring/12 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25 flex h-9 w-full rounded-lg border px-3 py-1 text-sm shadow-xs transition-shadow focus-visible:ring-[3px] focus-visible:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
        type === "file" &&
          "text-muted-foreground/70 file:border-input file:text-foreground p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic",
        className,
      )}
      {...props}
    />
  );
}
Input.displayName = "Input";

export { Input };
