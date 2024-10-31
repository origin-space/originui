import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Textarea12() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-12">Textarea with button</Label>
      <Textarea id="textarea-12" placeholder="Leave a comment" />
      <Button variant="outline" className="w-full">Send</Button>
    </div>
  );
}
