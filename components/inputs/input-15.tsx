import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input15() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-15">Input with end add-on</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <Input
          id="input-15"
          className="-me-px rounded-e-none shadow-none"
          placeholder="google"
          type="text"
        />
        <span className="-z-10 inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          .com
        </span>
      </div>
    </div>
  );
}
