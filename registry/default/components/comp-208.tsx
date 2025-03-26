import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select with error</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id} aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">React</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">Astro</SelectItem>
          <SelectItem value="4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
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
