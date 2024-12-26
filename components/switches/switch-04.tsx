import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-04" disabled />
      <Label htmlFor="switch-04" className="sr-only">
        Disabled
      </Label>
    </div>
  );
}
