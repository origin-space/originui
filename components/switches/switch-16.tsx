import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switch16() {
  return (
    <div className="items-top relative flex gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring">
      <Switch
        id="switch-16"
        className="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 [&_span]:data-[state=checked]:translate-x-2 rtl:[&_span]:data-[state=checked]:-translate-x-2"
        aria-describedby="switch-16-description"
      />
      <div className="grid grow gap-1">
        <Label htmlFor="switch-16">
          Label{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="switch-17-description" className="text-xs text-muted-foreground">
          A short description goes here.
        </p>
      </div>
    </div>
  );
}
