import { useId } from "react"

export default function Component() {
  const id = useId()
  return (
    <div className="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[input:is(:disabled)]:*:pointer-events-none">
      <label
        htmlFor={id}
        className="text-foreground block px-3 pt-2 text-xs font-medium"
      >
        Textarea with inset label
      </label>
      <textarea
        id={id}
        className="text-foreground placeholder:text-muted-foreground/70 flex min-h-[70px] w-full bg-transparent px-3 pb-2 text-sm focus-visible:outline-none"
      />
    </div>
  )
}
