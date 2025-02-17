import { Button } from "@/registry/default/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Component() {
  return (
    <Button variant="link" className="gap-1">
      <ChevronLeft className="opacity-60" size={16} aria-hidden="true" />
      Go back
    </Button>
  );
}
