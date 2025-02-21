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
          "--primary": "var(--color-indigo-500)",
          "--ring": "var(--color-indigo-500)",
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
