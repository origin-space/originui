import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id="switch-06"
        className="h-3 w-9 border-none outline-offset-[6px] [&_span]:border [&_span]:border-input"
      />
      <Label htmlFor="switch-06" className="sr-only">
        M2-style switch
      </Label>
    </div>
  );
}
