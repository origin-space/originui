import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Textarea17() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-17">Read-only textarea</Label>
      <Textarea id="textarea-17" className="read-only:bg-muted" defaultValue="This is a read-only textarea" readOnly placeholder="Leave a comment" />
    </div>
  );
}
