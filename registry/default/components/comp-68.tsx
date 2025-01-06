import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Textarea with left button</Label>
      <Textarea id={id} placeholder="Leave a comment" />
      <Button variant="outline">Send</Button>
    </div>
  );
}
