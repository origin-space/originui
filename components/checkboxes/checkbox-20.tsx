import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="grid gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-20-a" />
        <Label htmlFor="checkbox-20-a">React</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-20-b" />
        <Label htmlFor="checkbox-20-b">Next.js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-20-c" />
        <Label htmlFor="checkbox-20-c">Astro</Label>
      </div>
    </div>
  );
}
