import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Select with options groups</Label>
      <Select defaultValue="1">
        <SelectTrigger id={id}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Frontend</SelectLabel>
            <SelectItem value="1">React</SelectItem>
            <SelectItem value="2">Vue</SelectItem>
            <SelectItem value="3">Angular</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Backend</SelectLabel>
            <SelectItem value="4">Node.js</SelectItem>
            <SelectItem value="5">Python</SelectItem>
            <SelectItem value="6">Java</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
