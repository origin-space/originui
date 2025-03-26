import { CircleCheckIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <div className="flex grow items-center gap-3">
          <CircleCheckIcon
            className="mt-0.5 shrink-0 text-emerald-500"
            size={16}
            aria-hidden="true"
          />
          <div className="flex grow items-center justify-between gap-12">
            <p className="text-sm">You&lsquo;ve made changes!</p>
            <Button size="sm">Undo</Button>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close banner"
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}
