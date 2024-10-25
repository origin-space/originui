import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox01() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-01" />
      <Label htmlFor="checkbox-01">Simple checkbox</Label>
    </div>
  );
}
