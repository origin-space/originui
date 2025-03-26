import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { SelectNative } from "@/registry/default/ui/select-native"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select with option groups (native)</Label>
      <SelectNative id={id}>
        <optgroup label="Frontend">
          <option value="1">React</option>
          <option value="2">Vue</option>
          <option value="3">Angular</option>
        </optgroup>
        <optgroup label="Backend">
          <option value="4">Node.js</option>
          <option value="5">Python</option>
          <option value="6">Java</option>
        </optgroup>
      </SelectNative>
    </div>
  )
}
