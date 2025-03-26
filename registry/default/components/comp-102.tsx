import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Upvote"
      >
        <ChevronUpIcon size={16} aria-hidden="true" />
      </Button>
      <span className="border-input flex items-center border px-3 text-sm font-medium">
        235
      </span>
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Downvote"
      >
        <ChevronDownIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  )
}
