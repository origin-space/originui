import { Button } from "@/registry/default/ui/button";
import { ThumbsUp } from "lucide-react";

export default function Component() {
  return (
    <Button className="py-0 pe-0" variant="outline">
      <ThumbsUp className="me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
      Like
      <span className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input">
        86
      </span>
    </Button>
  );
}
