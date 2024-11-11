import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input16() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-16">Input with inline start and end add-on</Label>
      <div className="relative flex rounded-lg shadow-sm shadow-black/5">
        <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground">
          €
        </span>
        <Input
          id="input-16"
          className="-me-px rounded-e-none ps-6 shadow-none"
          placeholder="0.00"
          type="text"
        />
        <span className="-z-10 inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          EUR
        </span>
      </div>
    </div>
  );
}
