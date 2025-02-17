import { Button } from "@/registry/default/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Component() {
  return (
    <Button className="group" variant="secondary">
      <Mail className="-ms-1 opacity-60" size={16} aria-hidden="true" />
      Email
      <ArrowRight
        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
        size={16}
        aria-hidden="true"
      />
    </Button>
  );
}
