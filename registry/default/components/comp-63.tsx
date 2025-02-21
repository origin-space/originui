import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div
      className="*:not-first:mt-2 [--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)]"
    >
      <Label htmlFor={id}>Textarea with colored border and ring</Label>
      <Textarea id={id} placeholder="Leave a comment" />
    </div>
  );
}
