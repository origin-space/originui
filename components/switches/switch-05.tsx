import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-05" className="rounded-md [&_span]:rounded" />
      <Label htmlFor="switch-05" className="sr-only">
        Square switch
      </Label>
    </div>
  );
}
