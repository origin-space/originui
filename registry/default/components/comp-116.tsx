import { ChevronRightIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button className="relative pe-12">
      Next
      <span className="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center">
        <ChevronRightIcon className="opacity-60" size={16} aria-hidden="true" />
      </span>
    </Button>
  )
}
