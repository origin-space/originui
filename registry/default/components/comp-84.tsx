import { SparklesIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button variant="outline">
      Button
      <SparklesIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
    </Button>
  )
}
