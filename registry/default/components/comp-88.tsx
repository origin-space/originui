import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button>
      Button
      <ChevronDownIcon
        className="-me-1 opacity-60"
        size={16}
        aria-hidden="true"
      />
    </Button>
  )
}
