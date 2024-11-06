import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

export default function Select31() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-31">Status selector</Label>
      <Select defaultValue="completed">
        <SelectTrigger id="select-31" className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2 [&_*[role=option]>span]:items-center [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80">
          <SelectItem value="completed">
            <span className="flex items-center gap-2">
              <StatusDot className="text-green-600" />
              <span className="truncate">Completed</span>
            </span>
          </SelectItem>
          <SelectItem value="in-progress">
            <span className="flex items-center gap-2">
              <StatusDot className="text-blue-500" />
              <span className="truncate">In Progress</span>
            </span>
          </SelectItem>
          <SelectItem value="pending">
            <span className="flex items-center gap-2">
              <StatusDot className="text-yellow-500" />
              <span className="truncate">Pending</span>
            </span>
          </SelectItem>
          <SelectItem value="cancelled">
            <span className="flex items-center gap-2">
              <StatusDot className="text-gray-500" />
              <span className="truncate">Cancelled</span>
            </span>
          </SelectItem>
          <SelectItem value="failed">
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
