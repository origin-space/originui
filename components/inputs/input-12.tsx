import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input12() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-12">Input with end inline add-on</Label>
      <div className="relative">
        <Input id="input-12" className="peer pe-12" placeholder="google" type="text" />
        <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
          .com
        </span>
      </div>
    </div>
  );
}
