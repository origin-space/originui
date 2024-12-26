import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-01">Simple textarea</Label>
      <Textarea id="textarea-01" placeholder="Leave a comment" />
    </div>
  );
}
