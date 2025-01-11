import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Read-only textarea</Label>
      <Textarea
        id={id}
        className="read-only:bg-muted"
        defaultValue="This is a read-only textarea"
        readOnly
        placeholder="Leave a comment"
      />
    </div>
  );
}
