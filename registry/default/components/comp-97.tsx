import { Button } from "@/registry/default/ui/button";
import { PlusIcon } from "lucide-react";

export default function Component() {
  return (
    <Button className="rounded-full" variant="outline" size="icon" aria-label="Add new item">
      <PlusIcon size={16} aria-hidden="true" />
    </Button>
  );
}
