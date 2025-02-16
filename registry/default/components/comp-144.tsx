import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="border-input has-data-[state=checked]:border-ring/40 relative flex w-full items-start gap-2 rounded-lg border p-4 shadow-xs">
      <Checkbox
        id={id}
        className="order-1 after:absolute after:inset-0"
        aria-describedby={`${id}-description`}
      />
      <div className="grid grow gap-2">
        <Label htmlFor={id}>
          Label{" "}
          <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
            (Sublabel)
          </span>
        </Label>
        <p id={`${id}-description`} className="text-muted-foreground text-xs">
          A short description goes here.
        </p>
      </div>
    </div>
  );
}
