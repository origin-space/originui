import { useId } from "react"
import { Brush, Eraser, Scissors, SwatchBook } from "lucide-react"

import { Checkbox } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()

  const items = [
    { value: "1", label: "Palette", Icon: SwatchBook, defaultChecked: true },
    { value: "2", label: "Brush", Icon: Brush },
    { value: "3", label: "Eraser", Icon: Eraser },
    { value: "4", label: "Cut", Icon: Scissors },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={`${id}-${item.value}`}
          className="border-input has-data-[state=checked]:border-primary/50 relative flex cursor-pointer flex-col gap-4 rounded-md border p-4 shadow-xs outline-none"
        >
          <div className="flex justify-between gap-2">
            <Checkbox
              id={`${id}-${item.value}`}
              value={item.value}
              className="order-1 after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
            />
            <item.Icon className="opacity-60" size={16} aria-hidden="true" />
          </div>
          <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
        </div>
      ))}
    </div>
  )
}
