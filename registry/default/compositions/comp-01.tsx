import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-01">Simple input</Label>
      <Input id="input-01" placeholder="Email" type="email" />
    </div>
  );
}
