import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider04() {
  return (
    <div className="space-y-4">
      <Label>Slider with large track</Label>
      <Slider defaultValue={[25]} className="[&>:first-child]:rounded-sm [&>:first-child]:h-5 [&>:last-child>span]:rounded-sm" aria-label="Slider with large track" />
    </div>
  );
}
