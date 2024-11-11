import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea07() {
  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-07">Textarea with gray background</Label>
      <Textarea
        id="textarea-07"
        className="border-transparent bg-muted shadow-none"
        placeholder="Leave a comment"
      />
    </div>
  );
}
