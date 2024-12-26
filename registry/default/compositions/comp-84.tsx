// Dependencies: pnpm install lucide-react

import { Button } from "@/registry/default/ui/button";
import { Sparkles } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="outline">
      Button
      <Sparkles className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
