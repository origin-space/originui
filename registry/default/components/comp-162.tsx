import { useId } from "react"
import { Brush, Eraser, Scissors, SwatchBook } from "lucide-react"

import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function Component() {
  const id = useId()

  const items = [
    { value: "1", label: "Palette", Icon: SwatchBook },
    { value: "2", label: "Brush", Icon: Brush },
    { value: "3", label: "Eraser", Icon: Eraser },
    { value: "4", label: "Cut", Icon: Scissors },
  ]

  return (
    <RadioGroup className="grid-cols-2" defaultValue="1">
      {items.map((item) => (
        <div
          key={`${id}-${item.value}`}
          className="border-input has-data-[state=checked]:border-primary/50 relative flex flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
        >
          <div className="flex justify-between gap-2">
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="order-1 after:absolute after:inset-0"
            />
            <item.Icon className="opacity-60" size={16} aria-hidden="true" />
          </div>
          <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
