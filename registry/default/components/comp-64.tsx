import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Textarea with error</Label>
      <Textarea
        id={id}
        className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/20"
        placeholder="Leave a comment"
        defaultValue="Hello!"
      />
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Message should be at least 10 characters
      </p>
    </div>
  );
}
