import { XIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element.
    <div className="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
      <div className="flex gap-3">
        <img
          className="size-9 rounded-full"
          src="/avatar-32-01.jpg"
          width={32}
          height={32}
          alt="Mary Palmer"
        />
        <div className="flex grow flex-col gap-3">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">
              <a
                className="text-foreground font-medium hover:underline"
                href="#"
              >
                Mary Palmer
              </a>{" "}
              mentioned you in{" "}
              <a
                className="text-foreground font-medium hover:underline"
                href="#"
              >
                project-campaign-02
              </a>
              .
            </p>
            <p className="text-muted-foreground text-xs">2 min ago</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Accept</Button>
            <Button size="sm" variant="outline">
              Decline
            </Button>
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
