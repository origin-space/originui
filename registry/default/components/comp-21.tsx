import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with end button</Label>
      <div className="flex rounded-lg shadow-xs">
        <Input
          id={id}
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder="Email"
          type="email"
        />
        <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground outline-ring/30 dark:outline-ring/40 inline-flex items-center rounded-e-lg border px-3 text-sm font-medium outline-offset-2 transition-colors focus:z-10 focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50">
          Send
        </button>
      </div>
    </div>
  );
}
