// Dependencies: pnpm install react-payment-inputs

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePaymentInputs } from "react-payment-inputs";

export default function Input49() {
  const { getCVCProps } = usePaymentInputs();

  return (
    <div className="space-y-2">
      <Label htmlFor="cvc">Code</Label>
      <Input {...getCVCProps()} className="[direction:inherit]" />
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
