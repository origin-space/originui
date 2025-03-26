import { useId } from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} />
      <Label htmlFor={id}>Simple checkbox</Label>
    </div>
  )
}
