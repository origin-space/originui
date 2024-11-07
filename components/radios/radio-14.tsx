import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  { id: "radio-14-r1", value: "r1", label: "USA" },
  { id: "radio-14-r2", value: "r2", label: "UK" },
  { id: "radio-14-r3", value: "r3", label: "France" },
];

export default function Radio14() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">Server location</legend>
      <RadioGroup className="flex flex-wrap gap-2" defaultValue="r1">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-start gap-4 rounded-lg border border-input p-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                id={item.id}
                value={item.value}
                className="after:absolute after:inset-0"
              />
              <Label htmlFor={item.id}>{item.label}</Label>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
