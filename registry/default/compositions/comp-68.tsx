import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-10">Textarea with left button</Label>
      <Textarea id="textarea-10" placeholder="Leave a comment" />
      <Button variant="outline">Send</Button>
    </div>
  );
}
