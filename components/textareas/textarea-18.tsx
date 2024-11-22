import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
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
