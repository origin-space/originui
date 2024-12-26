import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-1">
        <Label htmlFor="textarea-04" className="leading-6">
          Textarea with hint
        </Label>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Textarea id="textarea-04" placeholder="Leave a comment" />
    </>
  );
}
