import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with start add-on</Label>
      <div className="flex rounded-md shadow-xs">
        <span className="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm">
          https://
        </span>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none"
          placeholder="google.com"
          type="text"
        />
      </div>
    </div>
  )
}
