import { Button } from "@/registry/default/ui/button";
import { Plus } from "lucide-react";

export default function Component() {
  return (
    <Button className="rounded-full" variant="outline" size="icon" aria-label="Add new item">
      <Plus size={16} strokeWidth={2} aria-hidden="true" />
    </Button>
  );
}
