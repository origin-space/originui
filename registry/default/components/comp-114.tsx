import { Button } from "@/registry/default/ui/button";
import { ChevronDown, GitFork } from "lucide-react";

export default function Component() {
  return (
    <div className="divide-primary-foreground/30 inline-flex -space-x-px divide-x rounded-lg shadow-xs rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        <GitFork className="me-2 opacity-60" size={16} aria-hidden="true" />
        Fork
        <span className="border-primary-foreground/30 text-primary-foreground/60 ms-3 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          18
        </span>
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDown size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
