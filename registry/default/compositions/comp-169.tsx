import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { Check, Minus } from "lucide-react";
import { useId } from "react";

const items = [
  { value: "1", label: "Light", image: "/ui-light.png" },
  { value: "2", label: "Dark", image: "/ui-dark.png" },
  { value: "3", label: "System", image: "/ui-system.png" },
];

export default function Component() {
  const id = useId();
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">Choose a theme</legend>
      <RadioGroup className="flex gap-3" defaultValue="1">
        {items.map((item) => (
          <label key={`${id}-${item.value}`}>
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="peer sr-only after:absolute after:inset-0"
            />
            <img
              src={item.image}
              alt={item.label}
              width={88}
              height={70}
              className="relative cursor-pointer overflow-hidden rounded-lg border border-input shadow-sm shadow-black/5 outline-offset-2 transition-colors peer-[:focus-visible]:outline peer-[:focus-visible]:outline-2 peer-[:focus-visible]:outline-ring/70 peer-data-[disabled]:cursor-not-allowed peer-data-[state=checked]:border-ring peer-data-[state=checked]:bg-accent peer-data-[disabled]:opacity-50"
            />
            <span className="group mt-2 flex items-center gap-1 peer-data-[state=unchecked]:text-muted-foreground/70">
              <Check
                size={16}
                strokeWidth={2}
                className="peer-data-[state=unchecked]:group-[]:hidden"
                aria-hidden="true"
              />
              <Minus
                size={16}
                strokeWidth={2}
                className="peer-data-[state=checked]:group-[]:hidden"
                aria-hidden="true"
              />
              <span className="text-xs font-medium">{item.label}</span>
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
