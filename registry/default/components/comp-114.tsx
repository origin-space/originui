import { ChevronDownIcon, GitForkIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <div className="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10">
        <GitForkIcon className="opacity-60" size={16} aria-hidden="true" />
        Fork
        <span className="border-primary-foreground/30 text-primary-foreground/60 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          18
        </span>
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDownIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  )
}
