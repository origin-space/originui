import { PlusIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button
      className="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Add new item"
    >
      <PlusIcon size={16} aria-hidden="true" />
    </Button>
  )
}
