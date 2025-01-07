import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-start gap-2">
      <Checkbox id={id} className="order-1" aria-describedby={`${id}-description`} />
      <div className="grid grow gap-2">
        <Label htmlFor={id}>
          Label{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id={`${id}-description`} className="text-xs text-muted-foreground">
          You can use this checkbox with a label and a description.
        </p>
      </div>
    </div>
  );
}
