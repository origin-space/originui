import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { ChevronDown } from "lucide-react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with start select</Label>
      <div className="flex rounded-lg shadow-xs">
        <div className="relative">
          <select
            className="peer inline-flex h-full appearance-none items-center rounded-none rounded-s-lg border border-input bg-background pe-8 ps-3 text-sm text-muted-foreground transition-shadow hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring/40 focus-visible:text-foreground focus-visible:outline-hidden focus-visible:ring-[3px] ring-ring/8 dark:ring-ring/12 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25"
            aria-label="Protocol"
          >
            <option value="https://">https://</option>
            <option value="http://">http://</option>
            <option value="ftp://">ftp://</option>
            <option value="sftp://">sftp://</option>
            <option value="ws://">ws://</option>
            <option value="wss://">wss://</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" role="img" />
          </span>
        </div>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none focus-visible:z-10"
          placeholder="192.168.1.1"
          type="text"
        />
      </div>
    </div>
  );
}
