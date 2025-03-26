import { RadioIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <RadioIcon className="opacity-60" size={16} />
        </div>
        <div className="flex grow items-center gap-12">
          <div className="space-y-1">
            <p className="text-sm font-medium">Live in 27 hours</p>
            <p className="text-muted-foreground text-xs">
              November 20 at 8:00 PM.
            </p>
          </div>
          <Button size="sm">Notify me</Button>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
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
