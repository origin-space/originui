import { Button } from "@/registry/default/ui/button";
import { LoaderCircle } from "lucide-react";

export default function Component() {
  return (
    <Button disabled>
      <LoaderCircle className="-ms-1 animate-spin" size={16} aria-hidden="true" />
      Button
    </Button>
  );
}
