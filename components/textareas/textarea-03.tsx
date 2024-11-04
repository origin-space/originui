import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea03() {
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
