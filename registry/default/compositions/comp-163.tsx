import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { RiAppleLine, RiBankCardLine, RiPaypalLine } from "@remixicon/react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <RadioGroup className="grid-cols-3" defaultValue="1">
      {/* Credit card */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
        <RadioGroupItem id={`${id}-1`} value="1" className="sr-only after:absolute after:inset-0" />
        <RiBankCardLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">Card</p>
      </label>
      {/* PayPal */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
        <RadioGroupItem id={`${id}-2`} value="2" className="sr-only after:absolute after:inset-0" />
        <RiPaypalLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">PayPal</p>
      </label>
      {/* Apple Pay */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70">
        <RadioGroupItem id={`${id}-3`} value="3" className="sr-only after:absolute after:inset-0" />
        <RiAppleLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">Apple Pay</p>
      </label>
    </RadioGroup>
  );
}
