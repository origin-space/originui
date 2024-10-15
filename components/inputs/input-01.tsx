import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input01() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-01">Simple input</Label>
      <Input id="input-01" placeholder="Email" type="email" />
    </div>
  );
}
