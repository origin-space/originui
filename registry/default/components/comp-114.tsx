import { Button } from "@/registry/default/ui/button";
import { ChevronDown, GitFork } from "lucide-react";

export default function Component() {
  return (
    <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        <GitFork className="me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        Fork
        <span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-primary-foreground/30 px-1 font-[inherit] text-[0.625rem] font-medium text-primary-foreground/60">
          18
        </span>
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="Options"
      >
        <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
      </Button>
    </div>
  );
}
