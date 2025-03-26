"use client"

import { useId } from "react"
import { CreditCardIcon } from "lucide-react"
import { usePaymentInputs } from "react-payment-inputs"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  const { getCardNumberProps } = usePaymentInputs()

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={`number-${id}`}>Card Number</Label>
      <div className="relative">
        <Input
          {...getCardNumberProps()}
          id={`number-${id}`}
          className="peer ps-9 [direction:inherit]"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <CreditCardIcon size={16} aria-hidden="true" />
        </div>
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://github.com/medipass/react-payment-inputs"
          target="_blank"
          rel="noopener nofollow"
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  )
}
