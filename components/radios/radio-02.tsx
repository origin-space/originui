import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio02() {
  return (
    <RadioGroup defaultValue="small" style={{ "--primary": "238.7 83.5% 66.7%", "--ring": "238.7 83.5% 66.7%" } as React.CSSProperties}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="radio-02-small" />
        <Label htmlFor="radio-02-small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="radio-02-medium" />
        <Label htmlFor="radio-02-medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="radio-02-large" />
        <Label htmlFor="radio-02-large">Large</Label>
      </div>
    </RadioGroup>
  )
}
