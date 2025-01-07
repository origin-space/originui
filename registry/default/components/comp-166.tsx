import { Badge } from "@/registry/default/ui/badge";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { useId } from "react";

export default function Component() {
  const id = useId();

  const items = [
    { value: "1", label: "Hobby", price: "$9/mo" },
    { value: "2", label: "Plus", price: "$29/mo" },
    { value: "3", label: "Team", price: "$49/mo" },
    { value: "4", label: "Enterprise", price: "Custom" },
  ];

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">Choose plan</legend>
      <RadioGroup
        className="gap-0 -space-y-px rounded-lg shadow-sm shadow-black/5"
        defaultValue="2"
      >
        {items.map((item) => (
          <div
            key={`${id}-${item.value}`}
            className="relative flex flex-col gap-4 border border-input p-4 first:rounded-t-lg last:rounded-b-lg has-[[data-state=checked]]:z-10 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id={`${id}-${item.value}`}
                  value={item.value}
                  className="after:absolute after:inset-0"
                  aria-describedby={`${`${id}-${item.value}`}-price`}
                />
                <Label className="inline-flex items-start" htmlFor={`${id}-${item.value}`}>
                  {item.label}
                  {item.value === "2" && <Badge className="-mt-1 ms-2">Popular</Badge>}
                </Label>
              </div>
              <div
                id={`${`${id}-${item.value}`}-price`}
                className="text-xs leading-[inherit] text-muted-foreground"
              >
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
