import { ThumbsUpIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button className="py-0 pe-0" variant="outline">
      <ThumbsUpIcon className="opacity-60" size={16} aria-hidden="true" />
      Like
      <span className="text-muted-foreground before:bg-input relative ms-1 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium before:absolute before:inset-0 before:left-0 before:w-px">
        86
      </span>
    </Button>
  )
}
