import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch08() {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="switch-08"
        className="border shadow-sm shadow-black/[.04] data-[state=checked]:border-ring data-[state=unchecked]:border-input data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent [&_span]:size-4 [&_span]:transition-all [&_span]:data-[state=checked]:translate-x-[1.1875rem] [&_span]:data-[state=unchecked]:translate-x-[0.1875rem] [&_span]:data-[state=checked]:bg-primary [&_span]:data-[state=unchecked]:bg-input [&_span]:data-[state=unchecked]:shadow-none"
      />
      <Label htmlFor="switch-08">Outline switch</Label>
    </div>
  );
}
