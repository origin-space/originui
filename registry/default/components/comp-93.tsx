import { Button } from "@/registry/default/ui/button";
import { Printer } from "lucide-react";

export default function Component() {
  return (
    <Button variant="outline">
      <Printer className="-ms-1 opacity-60" size={16} aria-hidden="true" />
      Print
      <kbd className="border-border bg-background text-muted-foreground/70 ms-1 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
        ⌘P
      </kbd>
    </Button>
  );
}
