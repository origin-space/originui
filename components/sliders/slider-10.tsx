import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider10() {
  return (
    <div className="space-y-4">
      <Label>Slider with references</Label>
      <div>
        <Slider defaultValue={[250]} max={1000} aria-label="Slider with references" />
        <span className="w-full px-2.5 mt-4 flex items-center justify-between gap-1 text-xs text-muted-foreground" aria-hidden="true">
          <span className="w-0 flex items-center justify-center">0</span>
          <span className="w-0 flex items-center justify-center">500</span>
          <span className="w-0 flex items-center justify-center">1,000</span>           
        </span>      
      </div>
    </div>
  );
}
