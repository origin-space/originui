import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio03() {
  return (
    <RadioGroup defaultValue="medium" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="radio-03-small" />
        <Label htmlFor="radio-03-small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="radio-03-medium" />
        <Label htmlFor="radio-03-medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="radio-03-large" />
        <Label htmlFor="radio-03-large">Large</Label>
      </div>
    </RadioGroup>
  );
}
