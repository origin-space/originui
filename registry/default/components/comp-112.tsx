import { Button } from "@/registry/default/ui/button";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        Preview
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Open link"
      >
        <SquareArrowOutUpRightIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
