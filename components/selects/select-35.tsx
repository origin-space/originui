// Dependencies: pnpm install @remixicon/react

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiGatsbyLine, RiNextjsLine, RiReactjsLine } from "@remixicon/react";

export default function Select35() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-35">Options with icon and right indicator</Label>
      <Select defaultValue="s2">
        <SelectTrigger
          id="select-35"
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectItem value="s1">
            <RiReactjsLine size={16} aria-hidden="true" />
            <span className="truncate">React</span>
          </SelectItem>
          <SelectItem value="s2">
            <RiNextjsLine size={16} aria-hidden="true" />
            <span className="truncate">Next.js</span>
          </SelectItem>
          <SelectItem value="s3">
            <RiGatsbyLine size={16} aria-hidden="true" />
            <span className="truncate">Gatsby</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
