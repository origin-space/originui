// Dependencies: pnpm install lucide-react

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Button11() {
  return (
    <Button>
      Button
      <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
