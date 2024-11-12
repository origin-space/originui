import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider10() {
  return (
    <div className="space-y-4">
      <Label>Slider with marks</Label>
      <div>
        <Slider defaultValue={[2500]} max={10000} aria-label="Slider with marks" />
        <span className="w-full px-2.5 mt-4 flex items-center justify-between gap-1 text-xs text-muted-foreground tabular-nums" aria-hidden="true">
          <span className="w-0 flex items-center justify-center">0</span>
          <span className="w-0 flex items-center justify-center">5,000</span>
          <span className="w-0 flex items-center justify-center">10,0000</span>           
        </span>      
      </div>
    </div>
  );
}
