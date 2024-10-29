import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Textarea09() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-09">Textarea with start button</Label>
      <Textarea id="textarea-09" placeholder="Leave a comment" />
      <Button variant="outline">Send</Button>
    </div>
  );
}
