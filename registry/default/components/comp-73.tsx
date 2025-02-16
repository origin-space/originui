import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="relative rounded-lg border border-input bg-background shadow-xs transition-shadow focus-within:border-ring/40 focus-within:outline-hidden focus-within:ring-[3px] ring-ring/8 dark:ring-ring/12 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-disabled:pointer-events-none has-[input:is(:disabled)_*]:pointer-events-none has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/25">
      <label htmlFor={id} className="block px-3 pt-2 text-xs font-medium text-foreground">
        Textarea with inset label
      </label>
      <textarea
        id={id}
        className="flex min-h-[70px] w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-hidden"
      />
    </div>
  );
}
