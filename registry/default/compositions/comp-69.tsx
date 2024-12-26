import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-11">Textarea with right button</Label>
      <Textarea id="textarea-11" placeholder="Leave a comment" />
      <div className="flex justify-end">
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
