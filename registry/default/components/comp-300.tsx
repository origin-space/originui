"use client"

import { CircleCheckIcon, XIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.custom((t) => (
          <div className="bg-background text-foreground w-full rounded-md border px-4 py-3 shadow-lg sm:w-[var(--width)]">
            <div className="flex gap-2">
              <div className="flex grow gap-3">
                <CircleCheckIcon
                  className="mt-0.5 shrink-0 text-emerald-500"
                  size={16}
                  aria-hidden="true"
                />
                <div className="flex grow justify-between gap-12">
                  <p className="text-sm">Message sent</p>
                  <div className="text-sm whitespace-nowrap">
                    <button className="text-sm font-medium hover:underline">
                      View
                    </button>{" "}
                    <span className="text-muted-foreground mx-1">·</span>{" "}
                    <button
                      className="text-sm font-medium hover:underline"
                      onClick={() => toast.dismiss(t)}
                    >
                      Undo
                    </button>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                onClick={() => toast.dismiss(t)}
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
        ))
      }}
    >
      Custom sonner
    </Button>
  )
}
