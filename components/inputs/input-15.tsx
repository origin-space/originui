import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input15() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-15">Input with right add-on</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/[.04]">
        <Input
          id="input-15"
          className="-mr-px rounded-r-none shadow-none"
          placeholder="google"
          type="text"
        />
        <span className="-z-10 inline-flex items-center rounded-r-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          .com
        </span>
      </div>
    </div>
  );
}
