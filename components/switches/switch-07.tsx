import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch07() {
  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id="switch-07"
        className="data-[state=unchecked]:border-input data-[state=unchecked]:bg-transparent [&_span]:transition-all [&_span]:data-[state=unchecked]:size-4 [&_span]:data-[state=unchecked]:translate-x-0.5 [&_span]:data-[state=unchecked]:bg-input [&_span]:data-[state=unchecked]:shadow-none rtl:[&_span]:data-[state=unchecked]:-translate-x-0.5"
      />
      <Label htmlFor="switch-07" className="sr-only">
        M3-style switch
      </Label>
    </div>
  );
}
