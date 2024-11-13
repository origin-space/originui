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
} from "@/components/ui/select";

export default function Select26() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-26">Select with separator</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-26">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Frontend</SelectLabel>
            <SelectItem value="s1">React</SelectItem>
            <SelectItem value="s2">Vue</SelectItem>
            <SelectItem value="s3">Angular</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Backend</SelectLabel>
            <SelectItem value="s4">Node.js</SelectItem>
            <SelectItem value="s5">Python</SelectItem>
            <SelectItem value="s6">Java</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
