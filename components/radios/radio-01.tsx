import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio01() {
  return (
    <RadioGroup defaultValue="small">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="radio-01-small" />
        <Label htmlFor="radio-01-small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="radio-01-medium" />
        <Label htmlFor="radio-01-medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="radio-01-large" />
        <Label htmlFor="radio-01-large">Large</Label>
      </div>
    </RadioGroup>
  )
}
