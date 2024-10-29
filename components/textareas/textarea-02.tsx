import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Textarea02() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-02">Required textarea <span className="text-destructive">*</span></Label>
      <Textarea id="textarea-02" placeholder="Leave a message" required />
    </div>
  );
}
