import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            W/ arrow
          </Button>
        </TooltipTrigger>
        <TooltipContent className="dark px-2 py-1 text-xs" showArrow={true}>
          This tooltip has an arrow
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
