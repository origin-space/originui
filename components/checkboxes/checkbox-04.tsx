import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox04() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-04" disabled />
      <Label htmlFor="checkbox-04">Disabled checkbox</Label>
    </div>
  );
}
