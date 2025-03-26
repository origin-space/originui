import { PlusIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button variant="outline" className="aspect-square max-sm:p-0">
      <PlusIcon className="opacity-60 sm:-ms-1" size={16} aria-hidden="true" />
      <span className="max-sm:sr-only">Add new</span>
    </Button>
  )
}
