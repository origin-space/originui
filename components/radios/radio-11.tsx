import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SwatchBook, Brush, Eraser, Scissors } from "lucide-react";

const items = [
  { id: "radio-1", label: "Palette", Icon: SwatchBook },
  { id: "radio-2", label: "Brush", Icon: Brush },
  { id: "radio-3", label: "Eraser", Icon: Eraser },
  { id: "radio-4", label: "Cut", Icon: Scissors },
];

export default function Radio11() {
  return (
    <RadioGroup className="grid-cols-2" defaultValue="radio-1">
      {items.map((item) => (
        <div className="relative items-top p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-4">
          <div className="flex justify-between space-x-2 space-x-reverse">
            <RadioGroupItem
              key={item.id}
              id={item.id}
              value={item.id}
              className="order-1 after:absolute after:inset-0"
            />
            <item.Icon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <Label htmlFor={item.id}>
            {item.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
