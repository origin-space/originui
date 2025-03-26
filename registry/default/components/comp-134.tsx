import { useId } from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]">
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Colored checkbox</Label>
    </div>
  )
}
