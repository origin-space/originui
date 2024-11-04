// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Button07() {
  return (
    <Button variant="outline">
      Button
      <Sparkles className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
