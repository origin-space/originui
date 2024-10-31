import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea12() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-12">Textarea with button</Label>
      <Textarea id="textarea-12" placeholder="Leave a comment" />
      <Button variant="outline" className="w-full">
        Send
      </Button>
    </div>
  );
}
