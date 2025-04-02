"use client"

import { useState } from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Button
      className="group rounded-full"
      variant="outline"
      size="icon"
      onClick={() => setOpen((prevState) => !prevState)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <PlusIcon
        className="transition-transform duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-[135deg]"
        size={16}
        aria-hidden="true"
      />
    </Button>
  )
}
