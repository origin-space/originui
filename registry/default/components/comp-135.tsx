import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} disabled />
      <Label htmlFor={id}>Disabled checkbox</Label>
    </div>
  );
}
