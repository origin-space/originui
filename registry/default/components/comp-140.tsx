import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-center justify-between gap-2">
      <Checkbox id={id} className="order-1" />
      <Label htmlFor={id}>Right aligned checkbox</Label>
    </div>
  );
}
