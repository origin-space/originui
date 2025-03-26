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
      <Label htmlFor={id}>Select with left text</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id}>
          <span>
            Language: <SelectValue placeholder="Select a language" />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Javascript</SelectItem>
          <SelectItem value="2">Bash</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
