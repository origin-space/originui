import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input07() {
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
