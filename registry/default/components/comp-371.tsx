"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

type Checked = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>["checked"]

export default function Component() {
  const [nextjs, setNextjs] = useState<Checked>(false)
  const [sveltekit, setSveltekit] = useState<Checked>(true)
  const [astro, setAstro] = useState<Checked>(false)
  const [remix, setRemix] = useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Checkbox items
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked={nextjs} onCheckedChange={setNextjs}>
          Next.js
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sveltekit}
          onCheckedChange={setSveltekit}
        >
          SvelteKit
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={remix}
          onCheckedChange={setRemix}
          disabled
        >
          Remix
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={astro} onCheckedChange={setAstro}>
          Astro
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
