import { Button } from "@/registry/default/ui/button";
import { ChevronLeftIcon } from "lucide-react";

export default function Component() {
  return (
    <Button variant="link" className="gap-1">
      <ChevronLeftIcon className="opacity-60" size={16} aria-hidden="true" />
      Go back
    </Button>
  );
}
