import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

import ContentImg from "@/public/dialog-content.png";

export default function TooltipDemo() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            W/ image
          </Button>
        </TooltipTrigger>
        <TooltipContent className="py-3">
          <div className="space-y-2">
            <Image
              className="w-full rounded"
              src={ContentImg}
              width={382}
              height={216}
              alt="Content image"
            />
            <div className="space-y-1">
              <p className="text-[13px] font-medium">Tooltip with title and icon</p>
              <p className="text-xs text-muted-foreground">
                Tooltips are made to be highly customizable, with features like dynamic placement,
                rich content, and a robust API.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
