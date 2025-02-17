import { Button } from "@/registry/default/ui/button";
import { ChevronDown } from "lucide-react";

export default function Component() {
  return (
    <Button>
      Button
      <ChevronDown className="-me-1 opacity-60" size={16} aria-hidden="true" />
    </Button>
  );
}
