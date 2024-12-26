import { Button } from "@/registry/default/ui/button";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function Component() {
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
