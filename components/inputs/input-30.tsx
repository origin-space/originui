import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input30() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-30">File input</Label>
      <Input id="input-30" type="file" />
    </div>
  );
}
