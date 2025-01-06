import { Button } from "@/registry/default/ui/button";
import { ChevronDown } from "lucide-react";

export default function Component() {
  return (
    <Button>
      Button
      <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
