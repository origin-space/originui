// Dependencies: pnpm install lucide-react

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Brush, Eraser, Scissors, SwatchBook } from "lucide-react";

const items = [
  { id: "radio-11-r1", value: "r1", label: "Palette", Icon: SwatchBook },
  { id: "radio-11-r2", value: "r2", label: "Brush", Icon: Brush },
  { id: "radio-11-r3", value: "r3", label: "Eraser", Icon: Eraser },
  { id: "radio-11-r4", value: "r4", label: "Cut", Icon: Scissors },
];

export default function Radio11() {
  return (
    <RadioGroup className="grid-cols-2" defaultValue="r1">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
        >
          <div className="flex justify-between gap-2">
            <RadioGroupItem
              id={item.id}
              value={item.value}
              className="order-1 after:absolute after:inset-0"
            />
            <item.Icon className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
