import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { Textarea } from "@/registry/default/ui/textarea"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <div className="flex items-center justify-between gap-1">
        <Label htmlFor={id} className="leading-6">
          Textarea with hint
        </Label>
        <span className="text-muted-foreground text-sm">Optional</span>
      </div>
      <Textarea id={id} placeholder="Leave a comment" />
    </div>
  )
}
