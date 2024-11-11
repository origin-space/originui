// Dependencies: pnpm install use-mask-input

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { withMask } from "use-mask-input";

export default function Input54() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-54">Input with mask</Label>
      <Input
        id="input-54"
        placeholder="AB12 CDE"
        type="text"
        ref={withMask("AA99 AAA", {
          placeholder: "",
          showMaskOnHover: false,
        })}
      />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/eduardoborges/use-mask-input"
          target="_blank"
          rel="noopener nofollow"
        >
          use-mask-input
        </a>
      </p>
    </div>
  );
}
