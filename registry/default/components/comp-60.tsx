import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>
        Required textarea <span className="text-destructive">*</span>
      </Label>
      <Textarea id={id} placeholder="Leave a message" required />
    </div>
  );
}
