import { useId } from "react"

import { Badge } from "@/registry/default/ui/badge"
import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function Component() {
  const id = useId()

  const items = [
    { value: "1", label: "Hobby", price: "$9/mo" },
    { value: "2", label: "Plus", price: "$29/mo" },
    { value: "3", label: "Team", price: "$49/mo" },
    { value: "4", label: "Enterprise", price: "Custom" },
  ]

  return (
    <fieldset className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">
        Choose plan
      </legend>
      <RadioGroup
        className="gap-0 -space-y-px rounded-md shadow-xs"
        defaultValue="2"
      >
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id={`${id}-${item.value}`}
                  value={item.value}
                  className="after:absolute after:inset-0"
                  aria-describedby={`${`${id}-${item.value}`}-price`}
                />
                <Label
                  className="inline-flex items-start"
                  htmlFor={`${id}-${item.value}`}
                >
                  {item.label}
                  {item.value === "2" && (
                    <Badge className="ms-2 -mt-1">Popular</Badge>
                  )}
                </Label>
              </div>
              <div
                id={`${`${id}-${item.value}`}-price`}
                className="text-muted-foreground text-xs leading-[inherit]"
              >
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
