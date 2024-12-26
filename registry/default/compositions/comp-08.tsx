import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-08">Disabled input</Label>
      <Input id="input-08" placeholder="Email" type="email" disabled />
    </div>
  );
}
