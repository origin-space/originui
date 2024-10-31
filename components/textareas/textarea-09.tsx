import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea09() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-09">Disabled textarea</Label>
      <Textarea id="textarea-09" disabled placeholder="Leave a comment" />
    </div>
  );
}
