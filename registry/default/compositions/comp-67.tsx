import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-09">Disabled textarea</Label>
      <Textarea id="textarea-09" disabled placeholder="Leave a comment" />
    </div>
  );
}
