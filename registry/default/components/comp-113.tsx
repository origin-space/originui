import { ChevronDownIcon, PinIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <div className="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDownIcon size={16} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
        <PinIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
        Pinned
      </Button>
    </div>
  )
}
