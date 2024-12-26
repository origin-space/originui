import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-01" />
      <Label htmlFor="switch-01" className="sr-only">
        Simple switch
      </Label>
    </div>
  );
}
