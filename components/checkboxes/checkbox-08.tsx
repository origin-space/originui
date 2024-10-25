import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox08() {
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-08-a" />
        <Label htmlFor="checkbox-08-a">React</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-08-b" />
        <Label htmlFor="checkbox-08-b">Next.js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-08-c" />
        <Label htmlFor="checkbox-08-c">Astro</Label>
      </div>
    </div>
  );
}
