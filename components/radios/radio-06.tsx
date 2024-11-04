// Dependencies: pnpm install @remixicon/react

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RiStarFill } from "@remixicon/react";

export default function Radio06() {
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="all" id="radio-06-all" />
        <Label htmlFor="radio-06-all">
          All reviews{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (12,921)
          </span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="5-stars" id="radio-06-5-stars" />
        <Label htmlFor="radio-06-5-stars" className="inline-flex items-center gap-1">
          <span className="inline-flex items-center text-amber-500" aria-hidden="true">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
          </span>
          <span className="sr-only">5 stars</span>{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (5,168)
          </span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="4-stars" id="radio-06-4-stars" />
        <Label htmlFor="radio-06-4-stars" className="inline-flex items-center gap-1">
          <span className="inline-flex items-center text-amber-500" aria-hidden="true">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} className="opacity-30" />
          </span>
          <span className="sr-only">4 stars</span>{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (4,726)
          </span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="3-stars" id="radio-06-3-stars" />
        <Label htmlFor="radio-06-3-stars" className="inline-flex items-center gap-1">
          <span className="inline-flex items-center text-amber-500" aria-hidden="true">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} className="opacity-30" />
            <RiStarFill size={16} className="opacity-30" />
          </span>
          <span className="sr-only">3 stars</span>{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (3,234)
          </span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="2-stars" id="radio-06-2-stars" />
        <Label htmlFor="radio-06-2-stars" className="inline-flex items-center gap-1">
          <span className="inline-flex items-center text-amber-500" aria-hidden="true">
            <RiStarFill size={16} />
            <RiStarFill size={16} />
            <RiStarFill size={16} className="opacity-30" />
            <RiStarFill size={16} className="opacity-30" />
            <RiStarFill size={16} className="opacity-30" />
          </span>
          <span className="sr-only">2 stars</span>{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (1,842)
          </span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="1-star" id="radio-06-1-star" />
        <Label htmlFor="radio-06-1-star" className="inline-flex items-center gap-1">
          <span className="inline-flex items-center text-amber-500" aria-hidden="true">
            <RiStarFill size={16} />
            <RiStarFill size={16} className="opacity-30" />
            <RiStarFill size={16} className="opacity-30" />
            <RiStarFill size={16} className="opacity-30" />
            <RiStarFill size={16} className="opacity-30" />
          </span>
          <span className="sr-only">1 star</span>{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">(452)</span>
        </Label>
      </div>
    </RadioGroup>
  );
}
