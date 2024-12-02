import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Mini</Button>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">This is a simple tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
