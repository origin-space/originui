import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils"

export default function Slider11() {
  const max = 12;
  const skipInterval = 2; // Set to 1 to allow no text skipping
  const ticks = [...Array(max + 1)].map((_, i) => i);
  
  return (
    <div className="space-y-4">
      <Label>Slider with ticks</Label>
      <div>
        <Slider defaultValue={[5]} max={max} aria-label="Slider with ticks" />
        <span className="w-full px-2.5 mt-3 flex items-center justify-between gap-1 text-xs text-muted-foreground" aria-hidden="true">
          {ticks.map((_, i) => (
            <span key={i} className="w-0 flex flex-col items-center justify-center gap-2">
              <span className={cn(
                "w-px h-1 bg-muted-foreground/70",
                i % skipInterval !== 0 && "h-0.5",
               )} />
              <span className={cn(
                i % skipInterval !== 0 && "opacity-0",
              )}>{i}</span>
            </span>
          ))}
        </span>      
      </div>
    </div>
  );
}
