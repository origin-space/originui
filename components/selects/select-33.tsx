import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Select33() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-33">Select with left text</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-33">
          <span>
            Language: <SelectValue placeholder="Select a language" />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s1">Javascript</SelectItem>
          <SelectItem value="s2">Bash</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
