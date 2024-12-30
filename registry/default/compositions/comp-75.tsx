import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Textarea with no resize</Label>
      <Textarea id={id} className="[resize:none]" placeholder="Leave a comment" />
    </div>
  );
}
