import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider11() {
  const max = 10;
  const ticks = [...Array(max + 1)].map((_, i) => i);
  
  return (
    <div className="space-y-4">
      <Label>Slider with ticks</Label>
      <div>
        <Slider defaultValue={[5]} max={max} aria-label="Slider with ticks" />
        <span className="w-full px-2.5 mt-4 flex items-center justify-between gap-1 text-xs text-muted-foreground tabular-nums" aria-hidden="true">
          {ticks.map((_, i) => (
            <span key={i} className="w-0.5 h-0.5 rounded-full bg-ring" />
          ))}
        </span>      
      </div>
    </div>
  );
}
