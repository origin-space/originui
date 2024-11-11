import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch05() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id="switch-05" className="rounded-md [&_span]:rounded" />
      <Label htmlFor="switch-05" className="sr-only">
        Square switch
      </Label>
    </div>
  );
}
