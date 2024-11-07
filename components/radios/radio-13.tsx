import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  { id: "radio-13-r1", value: "r1", label: "2 CPU" },
  { id: "radio-13-r2", value: "r2", label: "4 CPU" },
  { id: "radio-13-r3", value: "r3", label: "6 CPU" },
  { id: "radio-13-r4", value: "r4", label: "8 CPU" },
  { id: "radio-13-r5", value: "r5", label: "12 CPU" },
  { id: "radio-13-r6", value: "r6", label: "16 CPU", disabled: true },
];

export default function Radio13() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">CPU Cores</legend>
      <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="r1">
        {items.map((item) => (
          <label
            key={item.id}
            className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
          >
            <RadioGroupItem
              id={item.id}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
              disabled={item.disabled}
            />
            <p className="text-sm font-medium leading-none text-foreground">{item.label}</p>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
