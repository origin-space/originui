import { useId } from "react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        style={
          {
            "--primary": "var(--color-emerald-500)",
          } as React.CSSProperties
        }
        id={id}
        className="rounded-full"
        defaultChecked
      />
      <Label
        htmlFor={id}
        className="peer-data-[state=checked]:line-throgh after:bg-muted-foreground peer-data-[state=checked]:text-muted-foreground relative after:absolute after:top-1/2 after:left-0 after:h-px after:w-full after:origin-bottom after:-translate-y-1/2 after:scale-x-0 after:transition-transform after:ease-in-out peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100"
      >
        Fancy todo item
      </Label>
    </div>
  )
}
