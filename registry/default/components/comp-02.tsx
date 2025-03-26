import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>
        Required input <span className="text-destructive">*</span>
      </Label>
      <Input id={id} placeholder="Email" type="email" required />
    </div>
  )
}
