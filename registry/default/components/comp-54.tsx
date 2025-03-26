"use client"

import { useId } from "react"
import { withMask } from "use-mask-input"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
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
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://github.com/eduardoborges/use-mask-input"
          target="_blank"
          rel="noopener nofollow"
        >
          use-mask-input
        </a>
      </p>
    </div>
  )
}
