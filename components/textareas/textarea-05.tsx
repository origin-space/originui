import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Textarea05() {
  return (
    <div
      className="space-y-2"
      // NOTE: This inline style is to show how to set the --ring variable in your CSS file in order to change the focus ring color.
      style={{ "--ring": "234 89% 74%" } as React.CSSProperties}      
    >
      <Label htmlFor="textarea-05">Textarea with colored border and ring</Label>
      <Textarea id="textarea-05" placeholder="Leave a comment" />
    </div>
  );
}
