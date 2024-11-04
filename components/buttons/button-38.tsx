// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Button38() {
  return (
    <Button className="relative ps-12">
      Previous
      <span className="pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center bg-primary-foreground/15">
        <ChevronLeft className="opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      </span>
    </Button>
  );
}
