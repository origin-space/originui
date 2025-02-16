import { cn } from "@/registry/default/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-xs transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring/40 focus-visible:outline-hidden focus-visible:ring-[3px] ring-ring/8 dark:ring-ring/12 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none disabled:pointer-events-none aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25",
        type === "search" &&
        "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
        type === "file" &&
        "p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
Input.displayName = "Input";

export { Input };
