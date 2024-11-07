import { Checkbox } from "@/components/ui/checkbox";

const items = [
  { id: "checkbox-18-c1", value: "c1", label: "Monday", defaultChecked: true },
  { id: "checkbox-18-c2", value: "c2", label: "Tuesday", defaultChecked: true },
  { id: "checkbox-18-c3", value: "c3", label: "Wednesday" },
  { id: "checkbox-18-c4", value: "c4", label: "Thursday", defaultChecked: true },
  { id: "checkbox-18-c5", value: "c5", label: "Friday", defaultChecked: true },
  { id: "checkbox-18-c6", value: "c6", label: "Saturday" },
  { id: "checkbox-18-c7", value: "c7", label: "Sunday", disabled: true },
];

export default function Checkbox18() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">Days of the week</legend>
      <div className="flex gap-1.5">
        {items.map((item) => (
          <label
            key={item.id}
            className="relative flex size-9 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border border-input text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
          >
            <Checkbox
              id={item.id}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
            />
            <span aria-hidden="true" className="text-sm font-medium">
              {item.label[0]}
            </span>
            <span className="sr-only">{item.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
