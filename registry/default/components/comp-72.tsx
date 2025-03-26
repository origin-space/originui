import { useId } from "react"

import { Textarea } from "@/registry/default/ui/textarea"

export default function Component() {
  const id = useId()
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive absolute top-0 block translate-y-2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium"
      >
        <span className="bg-background inline-flex px-2">
          Textarea with label animation
        </span>
      </label>
      <Textarea id={id} placeholder=" " />
    </div>
  )
}
