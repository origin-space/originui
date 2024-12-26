import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-07">Input with gray background</Label>
      <Input
        id="input-07"
        className="border-transparent bg-muted shadow-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
