import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { CheckIcon, MinusIcon } from "lucide-react";
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
      <legend className="text-foreground text-sm leading-none font-medium">Choose a theme</legend>
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
              className="border-input outline-ring/30 dark:outline-ring/40 peer-data-[state=checked]:border-ring/40 peer-data-[state=checked]:bg-accent relative cursor-pointer overflow-hidden rounded-lg border shadow-xs outline-offset-2 transition-colors peer-focus-visible:outline-2 peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
            />
            <span className="group peer-data-[state=unchecked]:text-muted-foreground/70 mt-2 flex items-center gap-1">
              <CheckIcon
                size={16}
                className="group-peer-data-[state=unchecked]:hidden"
                aria-hidden="true"
              />
              <MinusIcon
                size={16}
                className="group-peer-data-[state=checked]:hidden"
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
