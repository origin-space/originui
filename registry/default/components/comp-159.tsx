import { useId } from "react"

import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function Component() {
  const id = useId()
  return (
    <RadioGroup className="gap-2" defaultValue="1">
      {/* Radio card #1 */}
      <div className="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
        <RadioGroupItem
          value="1"
          id={`${id}-1`}
          aria-describedby={`${id}-1-description`}
          className="order-1 after:absolute after:inset-0"
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${id}-1`}>
            Label{" "}
            <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
              (Sublabel)
            </span>
          </Label>
          <p
            id={`${id}-1-description`}
            className="text-muted-foreground text-xs"
          >
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
      {/* Radio card #2 */}
      <div className="border-input has-data-[state=checked]:border-primary/50 relative flex w-full items-start gap-2 rounded-md border p-4 shadow-xs outline-none">
        <RadioGroupItem
          value="2"
          id={`${id}-2`}
          aria-describedby={`${id}-2-description`}
          className="order-1 after:absolute after:inset-0"
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${id}-2`}>
            Label{" "}
            <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
              (Sublabel)
            </span>
          </Label>
          <p
            id={`${id}-2-description`}
            className="text-muted-foreground text-xs"
          >
            You can use this card with a label and a description.
          </p>
        </div>
      </div>
    </RadioGroup>
  )
}
