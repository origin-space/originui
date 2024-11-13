import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function StatusDot({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

export default function Select32() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-32">Status select</Label>
      <Select defaultValue="s1">
        <SelectTrigger
          id="select-32"
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
        >
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectItem value="s1">
            <span className="flex items-center gap-2">
              <StatusDot className="text-green-600" />
              <span className="truncate">Completed</span>
            </span>
          </SelectItem>
          <SelectItem value="s2">
            <span className="flex items-center gap-2">
              <StatusDot className="text-blue-500" />
              <span className="truncate">In Progress</span>
            </span>
          </SelectItem>
          <SelectItem value="s3">
            <span className="flex items-center gap-2">
              <StatusDot className="text-yellow-500" />
              <span className="truncate">Pending</span>
            </span>
          </SelectItem>
          <SelectItem value="s4">
            <span className="flex items-center gap-2">
              <StatusDot className="text-gray-500" />
              <span className="truncate">Cancelled</span>
            </span>
          </SelectItem>
          <SelectItem value="s5">
            <span className="flex items-center gap-2">
              <StatusDot className="text-red-500" />
              <span className="truncate">Failed</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
