import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-02">
        Required input <span className="text-destructive">*</span>
      </Label>
      <Input id="input-02" placeholder="Email" type="email" required />
    </div>
  );
}
