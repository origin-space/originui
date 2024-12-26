import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-17">Textarea with no resize</Label>
      <Textarea id="textarea-17" className="[resize:none]" placeholder="Leave a comment" />
    </div>
  );
}
