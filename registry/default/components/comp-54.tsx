"use client";

import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";
import { withMask } from "use-mask-input";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Input with mask</Label>
      <Input
        id={id}
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
