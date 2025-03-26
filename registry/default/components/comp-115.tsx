import { ChevronLeftIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button className="relative ps-12">
      Previous
      <span className="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center">
        <ChevronLeftIcon className="opacity-60" size={16} aria-hidden="true" />
      </span>
    </Button>
  )
}
