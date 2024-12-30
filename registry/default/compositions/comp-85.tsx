import { Button } from "@/registry/default/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Component() {
  return (
    <Button className="group" variant="ghost">
      <ArrowLeft
        className="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      Button
    </Button>
  );
}
