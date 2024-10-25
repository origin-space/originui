import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch04() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-04" disabled />
      <Label htmlFor="switch-04" className="sr-only">
        Disabled
      </Label>
    </div>
  );
}
