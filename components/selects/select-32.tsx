import { cn } from "@/lib/utils";
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

const Square = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <span data-square className={cn("size-5 rounded flex items-center justify-center text-xs font-medium bg-muted text-muted-foreground", className)} aria-hidden="true">
    {children}
  </span>
);

export default function Select32() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-32">Options with letter and right indicator</Label>
      <Select defaultValue="s1">
        <SelectTrigger id="select-32" className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_[data-square]]:shrink-0 ps-2">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2 [&_*[role=option]>span]:items-center [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
          <SelectGroup>
            <SelectLabel className="ps-2">Impersonate user</SelectLabel>
            <SelectItem value="s1">
              <Square className="bg-indigo-100 text-indigo-600">F</Square>
              <span className="truncate">Frank Allison</span>
            </SelectItem>
            <SelectItem value="s2">
              <Square className="bg-purple-100 text-purple-600">X</Square>
              <span className="truncate">Xavier Guerra</span>
            </SelectItem>
            <SelectItem value="s3">
              <Square className="bg-rose-100 text-rose-600">A</Square>
              <span className="truncate">Anne Kelley</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
