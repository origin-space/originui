import { PrinterIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function Component() {
  return (
    <Button variant="outline">
      <PrinterIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
      Print
      <kbd className="bg-background text-muted-foreground/70 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
        ⌘P
      </kbd>
    </Button>
  )
}
