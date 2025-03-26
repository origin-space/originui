import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { SelectNative } from "@/registry/default/ui/select-native"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Multiple select (native)</Label>
      <div className="border-input overflow-hidden rounded-md border">
        <SelectNative id={id} multiple className="rounded-none border-none">
          <option value="1">React</option>
          <option value="2">Next.js</option>
          <option value="3">Astro</option>
          <option value="4">Gatsby</option>
          <option value="5">Vue</option>
          <option value="6">Angular</option>
        </SelectNative>
      </div>
    </div>
  )
}
