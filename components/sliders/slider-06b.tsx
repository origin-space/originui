import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider06b() {
  return (
    <div className="space-y-4">
      <Label>Slider with labels</Label>
      <div>
        <span className="w-full mb-3 flex items-center justify-between gap-2 text-xs font-medium text-muted-foreground" aria-hidden="true">
          <span>Low</span>
          <span>High</span>
        </span>
        <Slider defaultValue={[50]} step={10} aria-label="Slider with labels" />
      </div>
    </div>
  );
}
