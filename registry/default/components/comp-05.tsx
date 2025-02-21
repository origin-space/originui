import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <>
      <div
        className="*:not-first:mt-2 [--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)]"
      >
        <Label htmlFor={id}>Input with colored border and ring</Label>
        <Input id={id} placeholder="Email" type="email" />
      </div>
    </>
  );
}
