import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function Slider14() {
  return (
    <div className="space-y-4">
      <legend className="text-sm font-medium text-foreground">Equalizer</legend>
      <div className="flex justify-center gap-8 h-48">
        <div className="flex flex-col gap-2 items-center">
          <Slider defaultValue={[2]} min={-5} max={5} orientation="vertical" className="[&>:last-child>span]:rounded [&>:last-child>span]:h-6 [&>:last-child>span]:w-4" aria-label="60 Hz" showTooltip />
          <Label className="w-0 flex justify-center">60</Label>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Slider defaultValue={[1]} min={-5} max={5} orientation="vertical" className="[&>:last-child>span]:rounded [&>:last-child>span]:h-6 [&>:last-child>span]:w-4" aria-label="250 Hz" showTooltip />
          <Label className="w-0 flex justify-center">250</Label>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Slider defaultValue={[-1]} min={-5} max={5} orientation="vertical" className="[&>:last-child>span]:rounded [&>:last-child>span]:h-6 [&>:last-child>span]:w-4" aria-label="1k" showTooltip />
          <Label className="w-0 flex justify-center">1k</Label>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Slider defaultValue={[-3]} min={-5} max={5} orientation="vertical" className="[&>:last-child>span]:rounded [&>:last-child>span]:h-6 [&>:last-child>span]:w-4" aria-label="4k" showTooltip />
          <Label className="w-0 flex justify-center">4k</Label>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Slider defaultValue={[2]} min={-5} max={5} orientation="vertical" className="[&>:last-child>span]:rounded [&>:last-child>span]:h-6 [&>:last-child>span]:w-4" aria-label="16k" showTooltip />
          <Label className="w-0 flex justify-center">16K</Label>
        </div>
      </div>
    </div>
  );
}
