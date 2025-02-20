import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring/40 ring-ring/8 dark:ring-ring/12 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25 flex min-h-19.5 w-full rounded-lg border px-3 py-2 text-sm shadow-xs transition-shadow focus-visible:ring-[3px] focus-visible:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
Textarea.displayName = "Textarea";

export { Textarea };
