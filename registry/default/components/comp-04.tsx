import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-1">
        <Label htmlFor={id} className="leading-6">
          Input with hint
        </Label>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Input id={id} placeholder="Email" type="email" />
    </>
  );
}
