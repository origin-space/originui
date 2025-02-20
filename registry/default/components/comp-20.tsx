import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { DownloadIcon } from "lucide-react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with end icon button</Label>
      <div className="flex rounded-lg shadow-xs">
        <Input
          id={id}
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Email"
          type="email"
        />
        <button
          className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground outline-ring/30 dark:outline-ring/40 inline-flex w-9 items-center justify-center rounded-e-lg border text-sm outline-offset-2 transition-colors focus:z-10 focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <DownloadIcon size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
