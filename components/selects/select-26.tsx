import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Select26() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-26">Select with separator</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-26">
          <SelectValue placeholder="Select food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="s1">Apple</SelectItem>
            <SelectItem value="s2">Banana</SelectItem>
            <SelectItem value="s3">Orange</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="s4">Carrot</SelectItem>
            <SelectItem value="s5">Broccoli</SelectItem>
            <SelectItem value="s6">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
