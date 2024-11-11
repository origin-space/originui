// Dependencies: pnpm install @remixicon/react

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RiAppleLine, RiBankCardLine, RiPaypalLine } from "@remixicon/react";

export default function Radio12() {
  return (
    <RadioGroup className="grid-cols-3" defaultValue="cc">
      {/* Credit card */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2">
        <RadioGroupItem
          id="radio-12-cc"
          value="cc"
          className="sr-only after:absolute after:inset-0"
        />
        <RiBankCardLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">Card</p>
      </label>
      {/* PayPal */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2">
        <RadioGroupItem
          id="radio-12-paypal"
          value="paypal"
          className="sr-only after:absolute after:inset-0"
        />
        <RiPaypalLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">PayPal</p>
      </label>
      {/* Apple Pay */}
      <label className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 ring-offset-background transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2">
        <RadioGroupItem
          id="radio-12-apple-pay"
          value="apple-pay"
          className="sr-only after:absolute after:inset-0"
        />
        <RiAppleLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">Apple Pay</p>
      </label>
    </RadioGroup>
  );
}
