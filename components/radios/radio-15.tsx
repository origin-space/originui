import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  { id: "radio-15-r1", value: "r1", label: "Hobby", price: "$9/mo" },
  { id: "radio-15-r2", value: "r2", label: "Plus", price: "$29/mo" },
  { id: "radio-15-r3", value: "r3", label: "Team", price: "$49/mo" },
  { id: "radio-15-r4", value: "r4", label: "Enterprise", price: "Custom" },
];

export default function Radio15() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">Choose plan</legend>
      <RadioGroup
        className="gap-0 -space-y-px rounded-lg shadow-sm shadow-black/5"
        defaultValue="r2"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col gap-4 border border-input p-4 first:rounded-t-lg last:rounded-b-lg has-[[data-state=checked]]:z-10 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  id={item.id}
                  value={item.value}
                  className="after:absolute after:inset-0"
                  aria-describedby={`${item.id}-price`}
                />
                <Label className="inline-flex items-start" htmlFor={item.id}>
                  {item.label}
                  {item.value === "r2" && (
                    <span className="-mt-1 ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-300/15 px-1 py-0.5 text-[10px] font-medium uppercase text-emerald-600">
                      Popular
                    </span>
                  )}
                </Label>
              </div>
              <div
                id={`${item.id}-price`}
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
