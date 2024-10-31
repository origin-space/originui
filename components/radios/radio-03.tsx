import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio03() {
  return (
    <RadioGroup defaultValue="r2" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="r1" id="radio-03-r1" />
        <Label htmlFor="radio-03-r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="r2" id="radio-03-r2" />
        <Label htmlFor="radio-03-r2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="r3" id="radio-03-r3" />
        <Label htmlFor="radio-03-r3">Option 3</Label>
      </div>
    </RadioGroup>
  );
}
