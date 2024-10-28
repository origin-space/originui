import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio02() {
  return (
    <RadioGroup
      defaultValue="r1"
      style={
        { "--primary": "238.7 83.5% 66.7%", "--ring": "238.7 83.5% 66.7%" } as React.CSSProperties
      }
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="r1" id="radio-02-r1" />
        <Label htmlFor="radio-02-r1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="r2" id="radio-02-r2" />
        <Label htmlFor="radio-02-r2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="r3" id="radio-02-r3" />
        <Label htmlFor="radio-02-r3">Option 3</Label>
      </div>
    </RadioGroup>
  );
}
