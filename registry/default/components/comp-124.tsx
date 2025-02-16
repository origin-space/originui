import { Button } from "@/registry/default/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Component() {
  return (
    <Button variant="link">
      <ChevronLeft className="me-1 opacity-60" size={16} aria-hidden="true" />
      Go back
    </Button>
  );
}
