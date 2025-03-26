import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-full shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Upvote"
      >
        <ChevronUpIcon size={16} aria-hidden="true" />
      </Button>
      <span className="bg-primary text-primary-foreground flex items-center px-1 text-sm font-medium">
        235
      </span>
      <Button
        className="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
        size="icon"
        aria-label="Downvote"
      >
        <ChevronDownIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  )
}
