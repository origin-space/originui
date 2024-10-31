import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea01() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-01">Simple textarea</Label>
      <Textarea id="textarea-01" placeholder="Leave a comment" />
    </div>
  );
}
