import { Button } from "@/registry/default/ui/button";
import { Ellipsis, Files, Film } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Files className="-ms-1 opacity-60" size={16} aria-hidden="true" />
        Files
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Film className="-ms-1 opacity-60" size={16} aria-hidden="true" />
        Media
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      >
        <Ellipsis size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
