// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function Button116() {
  return (
    <Button variant="outline">
      <Printer className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Print
      <kbd className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
        ⌘P
      </kbd>
    </Button>
  );
}
