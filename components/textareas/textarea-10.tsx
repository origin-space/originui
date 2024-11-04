import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea10() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-10">Textarea with left button</Label>
      <Textarea id="textarea-10" placeholder="Leave a comment" />
      <Button variant="outline">Send</Button>
    </div>
  );
}
