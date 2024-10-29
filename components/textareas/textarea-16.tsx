import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Textarea16() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-16">Textarea with no resize</Label>
      <Textarea id="textarea-16" className="[resize:none]" placeholder="Leave a comment" />
    </div>
  );
}
