import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Checkbox17() {
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-17-a" />
        <Label htmlFor="checkbox-17-a">React</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-17-b" />
        <Label htmlFor="checkbox-17-b">Next.js</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-17-c" />
        <Label htmlFor="checkbox-17-c">Astro</Label>
      </div>
    </div>
  );
}
