import { Button } from "@/registry/default/ui/button";
import { Archive } from "lucide-react";

export default function Component() {
  return (
    <Button>
      <Archive className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Button
    </Button>
  );
}
