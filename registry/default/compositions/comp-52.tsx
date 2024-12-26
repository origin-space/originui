import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-52">Read-only input</Label>
      <Input
        id="input-52"
        className="read-only:bg-muted"
        defaultValue="This is a read-only input"
        readOnly
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
