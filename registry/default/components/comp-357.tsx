import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function Component() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            W/ title
          </Button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-1">
            <p className="text-[13px] font-medium">Tooltip with title</p>
            <p className="text-xs text-muted-foreground">
              Tooltips can&lsquo;t be focused by keyboard. So don&lsquo;t use them for content that
              is important.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
