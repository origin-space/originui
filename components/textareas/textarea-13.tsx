import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Textarea13() {
  return (
    <div className="group relative">
      <Label
        htmlFor="textarea-13"
        className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[:disabled]:opacity-50"
      >
        Textarea with overlapping label
      </Label>
      <Textarea id="textarea-13" />
    </div>
  );
}
