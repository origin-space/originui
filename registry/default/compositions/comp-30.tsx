import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-30">File input</Label>
      <Input id="input-30" className="p-0 pe-3 file:me-3 file:border-0 file:border-e" type="file" />
    </div>
  );
}
