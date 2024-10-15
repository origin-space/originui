import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input25() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-25">Search input with &lt;kbd&gt;</Label>
      <div className="relative">
        <Input id="input-25" className="pr-11" placeholder="Search..." type="search" />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2 text-muted-foreground">
          <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-sans text-[0.625rem] font-medium text-muted-foreground/70">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
