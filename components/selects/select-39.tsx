import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const Square = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <span
    data-square
    className={cn(
      "flex size-5 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground",
      className,
    )}
    aria-hidden="true"
  >
    {children}
  </span>
);

export default function Select39() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-39">Options with placeholder avatar</Label>
      <Select defaultValue="s1">
        <SelectTrigger
          id="select-39"
          className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_[data-square]]:shrink-0"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectGroup>
            <SelectLabel className="ps-2">Impersonate user</SelectLabel>
            <SelectItem value="s1">
              <Square className="bg-indigo-400/20 text-indigo-500">F</Square>
              <span className="truncate">Frank Morris</span>
            </SelectItem>
            <SelectItem value="s2">
              <Square className="bg-purple-400/20 text-purple-500">X</Square>
              <span className="truncate">Xavier Guerra</span>
            </SelectItem>
            <SelectItem value="s3">
              <Square className="bg-rose-400/20 text-rose-500">A</Square>
              <span className="truncate">Anne Kelley</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
