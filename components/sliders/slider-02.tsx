import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider02() {
  return (
    <div className="space-y-4">
      <Label>Disabled slider</Label>
      <Slider defaultValue={[25]} disabled aria-label="Disabled slider" />
    </div>
  );
}
