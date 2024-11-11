// Dependencies: pnpm install lucide-react

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Brush, Eraser, Scissors, SwatchBook } from "lucide-react";

const items = [
  { id: "checkbox-16-c1", value: "c1", label: "Palette", Icon: SwatchBook, defaultChecked: true },
  { id: "checkbox-16-c2", value: "c2", label: "Brush", Icon: Brush },
  { id: "checkbox-16-c3", value: "c3", label: "Eraser", Icon: Eraser },
  { id: "checkbox-16-c4", value: "c4", label: "Cut", Icon: Scissors },
];

export default function Checkbox16() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <label
          key={item.id}
          className="relative flex cursor-pointer flex-col gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
        >
          <div className="flex justify-between gap-2">
            <Checkbox
              id={item.id}
              value={item.value}
              className="order-1 after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
            />
            <item.Icon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <Label htmlFor={item.id}>{item.label}</Label>
        </label>
      ))}
    </div>
  );
}
