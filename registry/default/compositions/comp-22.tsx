import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-22">Input with button</Label>
      <div className="flex gap-2">
        <Input id="input-22" className="flex-1" placeholder="Email" type="email" />
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
