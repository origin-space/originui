import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="flex items-center gap-2"
      style={
        { "--primary": "238.7 83.5% 66.7%", "--ring": "238.7 83.5% 66.7%" } as React.CSSProperties
      }
    >
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id}>Colored checkbox</Label>
    </div>
  );
}
