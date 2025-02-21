import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { RiAppleLine, RiBankCardLine, RiPaypalLine } from "@remixicon/react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <RadioGroup className="grid-cols-3" defaultValue="1">
      {/* Credit card */}
      <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
        <RadioGroupItem id={`${id}-1`} value="1" className="sr-only" />
        <RiBankCardLine className="opacity-60" size={20} aria-hidden="true" />
        <label
          htmlFor={`${id}-1`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Card
        </label>
      </div>
      {/* PayPal */}
      <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
        <RadioGroupItem id={`${id}-2`} value="2" className="sr-only" />
        <RiPaypalLine className="opacity-60" size={20} aria-hidden="true" />
        <label
          htmlFor={`${id}-2`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          PayPal
        </label>
      </div>
      {/* Apple Pay */}
      <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
        <RadioGroupItem id={`${id}-3`} value="3" className="sr-only" />
        <RiAppleLine className="opacity-60" size={20} aria-hidden="true" />
        <label
          htmlFor={`${id}-3`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          Apple Pay
        </label>
      </div>
    </RadioGroup>
  );
}
