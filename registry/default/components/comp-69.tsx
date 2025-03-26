import { useId } from "react"

import { Button } from "@/registry/default/ui/button"
import { Label } from "@/registry/default/ui/label"
import { Textarea } from "@/registry/default/ui/textarea"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Textarea with right button</Label>
      <Textarea id={id} placeholder="Leave a comment" />
      <div className="flex justify-end">
        <Button variant="outline">Send</Button>
      </div>
    </div>
  )
}
