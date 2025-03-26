import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { SelectNative } from "@/registry/default/ui/select-native"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select with error (native)</Label>
      <SelectNative id={id} aria-invalid>
        <option value="1">React</option>
        <option value="2">Next.js</option>
        <option value="3">Astro</option>
        <option value="4">Gatsby</option>
      </SelectNative>
      <p
        className="text-destructive mt-2 text-xs"
        role="alert"
        aria-live="polite"
      >
        Selected option is invalid
      </p>
    </div>
  )
}
