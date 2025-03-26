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
      <Label htmlFor={id}>Select with gray background</Label>
      <Select defaultValue="2">
        <SelectTrigger
          id={id}
          className="bg-muted border-transparent shadow-none"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">React</SelectItem>
          <SelectItem value="2">Next.js</SelectItem>
          <SelectItem value="3">Astro</SelectItem>
          <SelectItem value="4">Gatsby</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
