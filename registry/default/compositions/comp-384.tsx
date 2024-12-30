import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Tooltip-like popover</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none" side="top">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Popover with button</p>
            <p className="text-xs text-muted-foreground">
              I am a popover that would like to look like a tooltip. I can&lsquo;t be a tooltip
              because of the interactive element inside me.
            </p>
          </div>
          <Button size="sm" className="h-7 px-2">
            Know more
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
