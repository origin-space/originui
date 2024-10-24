import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch02() {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="switch-02"
        className="h-5 w-8 [&_span]:size-4 [&_span]:data-[state=checked]:translate-x-3"
      />
      <Label htmlFor="switch-02">Small switch</Label>
    </div>
  );
}
