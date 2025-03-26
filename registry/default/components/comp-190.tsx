import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { SelectNative } from "@/registry/default/ui/select-native"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select with placeholder (native)</Label>
      <SelectNative id={id} defaultValue="">
        <option value="" disabled>
          Please select a value
        </option>
        <option value="1">1 to 5</option>
        <option value="2">5 to 10</option>
        <option value="3">More than 10</option>
      </SelectNative>
    </div>
  )
}
