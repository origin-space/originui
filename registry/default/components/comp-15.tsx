import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with end add-on</Label>
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          className="-me-px rounded-e-none shadow-none"
          placeholder="google"
          type="text"
        />
        <span className="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-e-md border px-3 text-sm">
          .com
        </span>
      </div>
    </div>
  )
}
