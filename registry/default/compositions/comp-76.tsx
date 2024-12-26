import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-18">Read-only textarea</Label>
      <Textarea
        id="textarea-18"
        className="read-only:bg-muted"
        defaultValue="This is a read-only textarea"
        readOnly
        placeholder="Leave a comment"
      />
    </div>
  );
}
