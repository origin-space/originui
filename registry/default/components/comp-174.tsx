import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="inline-flex items-center gap-2"
      style={
        {
          "--primary": "oklch(0.59 0.20 277)",
          "--ring": "oklch(0.59 0.20 277)",
        } as React.CSSProperties
      }
    >
      <Switch id={id} defaultChecked />
      <Label htmlFor={id} className="sr-only">
        Colored switch
      </Label>
    </div>
  );
}
