import { Button } from "@/registry/default/ui/button";
import { ArrowRightIcon } from "lucide-react";
export default function Component() {
  return (
    <Button className="group">
      Button
      <ArrowRightIcon
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  );
}
