import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="*:not-first:mt-2"
      // NOTE: This inline style is to show how to set the --ring variable in your CSS file in order to change the focus ring color.
      style={{ "--ring": "oklch(0.59 0.20 277)" } as React.CSSProperties}
    >
      <Label htmlFor={id}>Input with colored border and ring</Label>
      <Input id={id} className="focus-visible:border-ring/60 ring-ring/20 dark:ring-ring/25" placeholder="Email" type="email" />
    </div>
  );
}
