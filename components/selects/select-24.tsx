import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Select15() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-24">Select with options groups</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-24">
          <SelectValue placeholder="Select food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="s1">Apple</SelectItem>
            <SelectItem value="s2">Banana</SelectItem>
            <SelectItem value="s3">Orange</SelectItem>
          </SelectGroup>
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
