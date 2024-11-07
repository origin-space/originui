import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox13() {
  return (
    <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
      <Checkbox
        id="checkbox-13"
        className="order-1 after:absolute after:inset-0"
        aria-describedby="checkbox-13-description"
      />
      <div className="grid grow gap-2">
        <Label htmlFor="checkbox-13">
          Label{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="checkbox-13-description" className="text-xs text-muted-foreground">
          A short description goes here.
        </p>
      </div>
    </div>
  );
}
