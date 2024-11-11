// Dependencies: pnpm install use-mask-input

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { withMask } from "use-mask-input";

export default function Input55() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-55">Timestamp</Label>
      <Input
        id="input-55"
        placeholder="00:00:00"
        type="text"
        ref={withMask("99:99:99", {
          placeholder: "-",
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
