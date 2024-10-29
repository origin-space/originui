import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Textarea10() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-10">Textarea with end button</Label>
      <Textarea id="textarea-10" placeholder="Leave a comment" />
      <div className="flex justify-end">
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
