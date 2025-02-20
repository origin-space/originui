import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { SendIcon } from "lucide-react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with end inline button</Label>
      <div className="relative">
        <Input id={id} className="pe-9" placeholder="Email" type="email" />
        <button
          className="text-muted-foreground/80 hover:text-foreground outline-ring/30 dark:outline-ring/40 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent outline-offset-2 transition-colors focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <SendIcon size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
