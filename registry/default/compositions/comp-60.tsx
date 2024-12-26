import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-02">
        Required textarea <span className="text-destructive">*</span>
      </Label>
      <Textarea id="textarea-02" placeholder="Leave a message" required />
    </div>
  );
}
