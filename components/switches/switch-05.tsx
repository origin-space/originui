import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch05() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch-05" className="rounded-md [&_span]:rounded" />
      <Label htmlFor="switch-05">Square switch</Label>
    </div>
  );
}
