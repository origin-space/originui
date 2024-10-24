import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SwatchBook, Brush, Eraser, Scissors } from "lucide-react";

const items = [
  { id: "checkbox-14-c1", value: "c1", label: "Palette", Icon: SwatchBook, defaultChecked: true },
  { id: "checkbox-14-c2", value: "c2", label: "Brush", Icon: Brush },
  { id: "checkbox-14-c3", value: "c3", label: "Eraser", Icon: Eraser },
  { id: "checkbox-14-c4", value: "c4", label: "Cut", Icon: Scissors },
];

export default function Checkbox14() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <label key={item.id} className="relative items-top p-4 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-4 cursor-pointer">
          <div className="flex justify-between space-x-2 space-x-reverse">
            <Checkbox
              id={item.id}
              value={item.value}
              className="order-1 after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
            />
            <item.Icon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <Label htmlFor={item.id}>
            {item.label}
          </Label>
        </label>
      ))}
    </div>
  )
}
