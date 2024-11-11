import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea06() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-06">Textarea with error</Label>
      <Textarea
        id="textarea-06"
        className="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
        placeholder="Leave a comment"
        defaultValue="Hello!"
      />
      <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
        Message should be at least 10 characters
      </p>
    </div>
  );
}
