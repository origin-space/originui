"use client";

import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";
import { usePaymentInputs } from "react-payment-inputs";

export default function Component() {
  const id = useId();
  const { getExpiryDateProps } = usePaymentInputs();

  return (
    <div className="space-y-2">
      <Label htmlFor={`expiry-${id}`}>Expiry date</Label>
      <Input {...getExpiryDateProps()} id={`expiry-${id}`} className="[direction:inherit]" />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/medipass/react-payment-inputs"
          target="_blank"
          rel="noopener nofollow"
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  );
}
