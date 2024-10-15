import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input13() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-13">Input with inline add-ons</Label>
      <div className="relative">
        <Input id="input-13" className="peer pl-6 pr-12" placeholder="0.00" type="text" />
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-sm text-muted-foreground peer-disabled:opacity-50">
          €
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-sm text-muted-foreground peer-disabled:opacity-50">
          EUR
        </span>
      </div>
    </div>
  );
}
