import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  { id: "radio-16-r1", value: "r1", label: "Angry", icon: "😠" },
  { id: "radio-16-r2", value: "r2", label: "Sad", icon: "🙁" },
  { id: "radio-16-r3", value: "r3", label: "Neutral", icon: "😐" },
  { id: "radio-16-r4", value: "r4", label: "Happy", icon: "🙂" },
  { id: "radio-16-r5", value: "r5", label: "Laughing", icon: "😀" },
];

export default function Radio16() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">How did it go?</legend>
      <RadioGroup className="flex gap-1.5" defaultValue="r3">
        {items.map((item) => (
          <label
            key={item.id}
            className="relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border border-input text-center text-xl shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
          >
            <RadioGroupItem
              id={item.id}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
            />
            {item.icon}
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
