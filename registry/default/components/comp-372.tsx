"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function Component() {
  const [framework, setFramework] = useState("nextjs")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Radio items
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={framework} onValueChange={setFramework}>
          <DropdownMenuRadioItem value="nextjs">Next.js</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sveltekit" disabled>
            SvelteKit
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="remix">Remix</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="astro">Astro</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
