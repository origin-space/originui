import { Button } from "@/registry/default/ui/button";
import { Plus } from "lucide-react";

export default function Component() {
  return (
    <Button variant="outline" className="aspect-square max-sm:p-0">
      <Plus className="opacity-60 sm:-ms-1 sm:me-2" size={16} strokeWidth={2} aria-hidden="true" />
      <span className="max-sm:sr-only">Add new</span>
    </Button>
  );
}
