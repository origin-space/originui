import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-08">Shorter textarea</Label>
      <Textarea id="textarea-08" className="min-h-[none]" placeholder="Leave a comment" rows={2} />
    </div>
  );
}
