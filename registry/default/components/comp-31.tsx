import { useId } from "react"

import { Input } from "@/registry/default/ui/input"

export default function Component() {
  const id = useId()
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
      >
        Input with overlapping label
      </label>
      <Input id={id} className="h-10" placeholder="Email" type="email" />
    </div>
  )
}
