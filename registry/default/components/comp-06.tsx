import { useId } from "react"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with error</Label>
      <Input
        id={id}
        className="peer"
        placeholder="Email"
        type="email"
        defaultValue="invalid@email.com"
        aria-invalid
      />
      <p
        className="peer-aria-invalid:text-destructive mt-2 text-xs"
        role="alert"
        aria-live="polite"
      >
        Email is invalid
      </p>
    </div>
  )
}
