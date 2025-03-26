import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>File input</Label>
      <Input
        id={id}
        className="p-0 pe-3 file:me-3 file:border-0 file:border-e"
        type="file"
      />
    </div>
  )
}
