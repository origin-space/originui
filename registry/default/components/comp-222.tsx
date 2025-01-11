import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { RiGatsbyLine, RiNextjsLine, RiReactjsLine } from "@remixicon/react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Options with icon</Label>
      <Select defaultValue="3">
        <SelectTrigger
          id={id}
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2">
          <SelectItem value="1">
            <RiReactjsLine size={16} aria-hidden="true" />
            <span className="truncate">React</span>
          </SelectItem>
          <SelectItem value="2">
            <RiNextjsLine size={16} aria-hidden="true" />
            <span className="truncate">Next.js</span>
          </SelectItem>
          <SelectItem value="3">
            <RiGatsbyLine size={16} aria-hidden="true" />
            <span className="truncate">Gatsby</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
