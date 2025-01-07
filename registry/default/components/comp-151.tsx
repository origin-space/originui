import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id={`${id}-1`} />
        <Label htmlFor={`${id}-1`}>React</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={`${id}-2`} />
        <Label htmlFor={`${id}-2`}>Next.js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={`${id}-3`} />
        <Label htmlFor={`${id}-3`}>Astro</Label>
      </div>
    </div>
  );
}
