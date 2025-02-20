import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="flex items-center gap-2"
      style={
        {
          "--primary": "oklch(0.59 0.20 277)",
          "--ring": "oklch(0.59 0.20 277)",
        } as React.CSSProperties
      }
    >
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Colored checkbox</Label>
    </div>
  );
}
