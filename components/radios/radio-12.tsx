import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RiBankCardLine, RiPaypalLine, RiAppleLine } from "@remixicon/react";

export default function Radio12() {
  return (
    <RadioGroup className="grid-cols-3" defaultValue="cc">
      {/* Credit card */}
      <label className="relative items-center text-center py-3 px-2 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-3 cursor-pointer ring-offset-background transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2">
        <RadioGroupItem
          id="radio-12-cc"
          value="cc"
          className="sr-only after:absolute after:inset-0"
        />
        <RiBankCardLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">Card</p>
      </label>
      {/* PayPal */}
      <label className="relative items-center text-center py-3 px-2 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-3 cursor-pointer ring-offset-background transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2">
        <RadioGroupItem
          id="radio-12-paypal"
          value="paypal"
          className="sr-only after:absolute after:inset-0"
        />
        <RiPaypalLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">PayPal</p>
      </label>
      {/* Apple Pay */}
      <label className="relative items-center text-center py-3 px-2 border border-input rounded-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-3 cursor-pointer ring-offset-background transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2">
        <RadioGroupItem
          id="radio-12-apple-pay"
          value="apple-pay"
          className="sr-only after:absolute after:inset-0"
        />
        <RiAppleLine className="opacity-60" size={20} aria-hidden="true" />
        <p className="text-xs font-medium leading-none text-foreground">Apple Pay</p>
      </label>
    </RadioGroup>
  )
}
