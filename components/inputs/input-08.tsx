import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input08() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-08">Disabled input</Label>
      <Input id="input-08" placeholder="Email" type="email" disabled />
    </div>
  );
}
