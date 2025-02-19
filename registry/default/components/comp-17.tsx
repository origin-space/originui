import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { ChevronDownIcon } from "lucide-react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with start select</Label>
      <div className="flex rounded-lg shadow-xs">
        <div className="relative">
          <select
            className="peer border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:border-ring/40 focus-visible:text-foreground ring-ring/8 dark:ring-ring/12 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/25 inline-flex h-full appearance-none items-center rounded-none rounded-s-lg border ps-3 pe-8 text-sm transition-shadow focus:z-10 focus-visible:ring-[3px] focus-visible:outline-hidden disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Protocol"
          >
            <option value="https://">https://</option>
            <option value="http://">http://</option>
            <option value="ftp://">ftp://</option>
            <option value="sftp://">sftp://</option>
            <option value="ws://">ws://</option>
            <option value="wss://">wss://</option>
          </select>
          <span className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center peer-disabled:opacity-50">
            <ChevronDownIcon size={16} aria-hidden="true" role="img" />
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
