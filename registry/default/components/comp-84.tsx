import { Button } from "@/registry/default/ui/button";
import { Sparkles } from "lucide-react";

export default function Component() {
  return (
    <Button variant="outline">
      Button
      <Sparkles className="-me-1 opacity-60" size={16} aria-hidden="true" />
    </Button>
  );
}
