import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { RiStarFill } from "@remixicon/react";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <RadioGroup defaultValue="all">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="all" id={`${id}-1`} />
        <Label htmlFor={`${id}-1`}>
          All reviews{" "}
          <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
            (12,921)
          </span>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="5-stars" id={`${id}-2`} />
        <Label htmlFor={`${id}-2`} className="inline-flex items-center gap-1">
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
        <RadioGroupItem value="4-stars" id={`${id}-3`} />
        <Label htmlFor={`${id}-3`} className="inline-flex items-center gap-1">
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
        <RadioGroupItem value="3-stars" id={`${id}-4`} />
        <Label htmlFor={`${id}-4`} className="inline-flex items-center gap-1">
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
        <RadioGroupItem value="2-stars" id={`${id}-5`} />
        <Label htmlFor={`${id}-5`} className="inline-flex items-center gap-1">
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
        <RadioGroupItem value="1-star" id={`${id}-6`} />
        <Label htmlFor={`${id}-6`} className="inline-flex items-center gap-1">
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
