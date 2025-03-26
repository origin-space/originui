import { useId } from "react"
import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"
import { Checkbox } from "@/registry/default/ui/checkbox"

export default function Component() {
  const id = useId()
  return (
    <Badge className="has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative outline-none has-focus-visible:ring-[3px]">
      <Checkbox
        id={id}
        className="peer sr-only after:absolute after:inset-0"
        defaultChecked
      />
      <CheckIcon
        size={12}
        className="hidden peer-data-[state=checked]:block"
        aria-hidden="true"
      />
      <label
        htmlFor={id}
        className="cursor-pointer select-none after:absolute after:inset-0"
      >
        Selectable
      </label>
    </Badge>
  )
}
