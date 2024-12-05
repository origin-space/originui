import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

import { ListFilter } from "lucide-react";

export default function PopoverDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Filters">
            <ListFilter size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-3 w-36">
          <div className="space-y-3">
            <div className="text-xs font-medium text-muted-foreground">Filters</div>
            <form className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox id="popover-filter-01" />
                <Label htmlFor="popover-filter-01">Real Time</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="popover-filter-02" />
                <Label htmlFor="popover-filter-02">Top Channels</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="popover-filter-03" />
                <Label htmlFor="popover-filter-03">Last Orders</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="popover-filter-04" />
                <Label htmlFor="popover-filter-04">Total Spent</Label>
              </div>              
              <div role="separator" aria-orientation="horizontal" className="-mx-3 my-1 h-px bg-border"></div>
              <div className="flex justify-between gap-2">
                <Button size="sm" variant="outline" className="h-7 px-2">Clear</Button>
                <Button size="sm" className="h-7 px-2">Apply</Button>
              </div>
            </form>          
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
