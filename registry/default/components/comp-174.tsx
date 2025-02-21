import { Label } from "@/registry/default/ui/label";
import { Switch } from "@/registry/default/ui/switch";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="inline-flex items-center gap-2 [--ring:var(--color-indigo-300)] [--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)] in-[.dark]:[--primary:var(--color-indigo-500)]"
    >
      <Switch id={id} defaultChecked />
      <Label htmlFor={id} className="sr-only">
        Colored switch
      </Label>
    </div>
  );
}
