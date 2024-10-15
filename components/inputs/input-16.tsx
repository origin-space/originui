import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input16() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-16">Input with inline left and right add-on</Label>
      <div className="relative flex rounded-lg shadow-sm shadow-black/[.04]">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-sm text-muted-foreground">
          €
        </span>
        <Input
          id="input-16"
          className="-mr-px rounded-r-none pl-6 shadow-none"
          placeholder="0.00"
          type="text"
        />
        <span className="-z-10 inline-flex items-center rounded-r-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          EUR
        </span>
      </div>
    </div>
  );
}
