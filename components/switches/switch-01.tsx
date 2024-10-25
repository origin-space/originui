import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch01() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-01" />
      <Label htmlFor="switch-01" className="sr-only">
        Simple switch
      </Label>
    </div>
  );
}
