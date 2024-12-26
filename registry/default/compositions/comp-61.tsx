import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-03">Textarea with helper text</Label>
      <Textarea id="textarea-03" placeholder="Leave a comment" />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Please add as many details as you can
      </p>
    </div>
  );
}
