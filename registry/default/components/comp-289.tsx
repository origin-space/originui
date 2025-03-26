import { TriangleAlertIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <TriangleAlertIcon
            className="mt-0.5 shrink-0 text-amber-500"
            size={16}
            aria-hidden="true"
          />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                Something requires your action!
              </p>
              <p className="text-muted-foreground text-sm">
                It conveys that a specific action is needed to resolve or
                address a situation.
              </p>
            </div>
            <div>
              <Button size="sm">Learn more</Button>
            </div>
          </div>
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
