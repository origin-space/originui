import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-19.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring/40 focus-visible:outline-hidden focus-visible:ring-[3px] ring-ring/8 dark:ring-ring/12  disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25",
        className,
      )}
      {...props}
    />
  );
}
Textarea.displayName = "Textarea";

export { Textarea };
