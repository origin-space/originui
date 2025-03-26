import { useId } from "react"
import { ClockIcon } from "lucide-react"

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
      <Label htmlFor={id}>Select with icon</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id} className="relative ps-9">
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50">
            <ClockIcon size={16} aria-hidden="true" />
          </div>
          <SelectValue placeholder="Select time" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">00:00 AM - 11:59 PM</SelectItem>
          <SelectItem value="2">01:00 AM - 12:59 PM</SelectItem>
          <SelectItem value="3">02:00 AM - 01:59 PM</SelectItem>
          <SelectItem value="4">03:00 AM - 02:59 PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
