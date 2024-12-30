import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function Component() {
  return (
    <div className="space-y-4">
      <legend className="text-sm font-medium text-foreground">Equalizer</legend>
      <div className="flex h-48 justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Slider
            defaultValue={[2]}
            min={-5}
            max={5}
            orientation="vertical"
            className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
            aria-label="60 Hz"
            showTooltip
          />
          <Label className="flex w-0 justify-center text-xs text-muted-foreground">60</Label>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Slider
            defaultValue={[1]}
            min={-5}
            max={5}
            orientation="vertical"
            className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
            aria-label="250 Hz"
            showTooltip
          />
          <Label className="flex w-0 justify-center text-xs text-muted-foreground">250</Label>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Slider
            defaultValue={[-1]}
            min={-5}
            max={5}
            orientation="vertical"
            className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
            aria-label="1k"
            showTooltip
          />
          <Label className="flex w-0 justify-center text-xs text-muted-foreground">1k</Label>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Slider
            defaultValue={[-3]}
            min={-5}
            max={5}
            orientation="vertical"
            className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
            aria-label="4k"
            showTooltip
          />
          <Label className="flex w-0 justify-center text-xs text-muted-foreground">4k</Label>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Slider
            defaultValue={[2]}
            min={-5}
            max={5}
            orientation="vertical"
            className="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
            aria-label="16k"
            showTooltip
          />
          <Label className="flex w-0 justify-center text-xs text-muted-foreground">16K</Label>
        </div>
      </div>
    </div>
  );
}
