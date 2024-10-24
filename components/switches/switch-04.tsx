import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch04() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch-04" disabled />
      <Label htmlFor="switch-04">Disabled switch</Label>
    </div>
  );
}
