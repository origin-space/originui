"use client"

import { useState } from "react"
import { XIcon } from "lucide-react"

import { Badge } from "@/registry/default/ui/badge"

export default function Component() {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Badge className="gap-0">
      Removable
      <button
        className="focus-visible:border-ring focus-visible:ring-ring/50 text-primary-foreground/60 hover:text-primary-foreground -my-px -ms-px -me-1.5 inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-[inherit] p-0 transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        onClick={() => setIsActive(false)}
      >
        <XIcon size={12} aria-hidden="true" />
      </button>
    </Badge>
  )
}
