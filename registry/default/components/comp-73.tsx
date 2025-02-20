import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="border-input bg-background focus-within:border-ring/40 ring-ring/8 dark:ring-ring/12 has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/25 relative rounded-lg border shadow-xs transition-shadow focus-within:ring-[3px] focus-within:outline-hidden has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)_*]:pointer-events-none">
      <label htmlFor={id} className="text-foreground block px-3 pt-2 text-xs font-medium">
        Textarea with inset label
      </label>
      <textarea
        id={id}
        className="text-foreground placeholder:text-muted-foreground/70 flex min-h-[70px] w-full bg-transparent px-3 pb-2 text-sm focus-visible:outline-hidden"
      />
    </div>
  );
}
