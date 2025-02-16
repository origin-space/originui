import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <>
      <fieldset className="space-y-4">
        <legend className="text-foreground text-sm leading-none font-medium">
          How likely are you to recommend us?
        </legend>
        <RadioGroup className="flex gap-0 -space-x-px rounded-lg shadow-xs">
          {["0", "1", "2", "3", "4", "5"].map((value) => (
            <label
              key={value}
              className="border-input has-data-[state=checked]:border-ring/40 has-data-[state=checked]:bg-accent outline-ring/30 dark:outline-ring/40 relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border text-center text-sm font-medium outline-offset-2 transition-colors first:rounded-s-lg last:rounded-e-lg has-focus-visible:outline-2 has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-data-[state=checked]:z-10"
            >
              <RadioGroupItem
                id={`${id}-${value}`}
                value={value}
                className="sr-only after:absolute after:inset-0"
              />
              {value}
            </label>
          ))}
        </RadioGroup>
      </fieldset>
      <div className="mt-1 flex justify-between text-xs font-medium">
        <p>
          <span className="text-base">😡</span> Not likely
        </p>
        <p>
          Very Likely <span className="text-base">😍</span>
        </p>
      </div>
    </>
  );
}
