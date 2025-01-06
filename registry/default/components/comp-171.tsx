"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { RiStarFill } from "@remixicon/react";
import { useId, useState } from "react";

export default function Component() {
  const id = useId();
  const [hoverRating, setHoverRating] = useState("");
  const [currentRating, setCurrentRating] = useState("");

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">
        Rate your experience
      </legend>
      <RadioGroup className="inline-flex gap-0" onValueChange={setCurrentRating}>
        {["1", "2", "3", "4", "5"].map((value) => (
          <label
            key={value}
            className="group relative cursor-pointer rounded-lg p-0.5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating("")}
          >
            <RadioGroupItem id={`${id}-${value}`} value={value} className="sr-only" />
            <RiStarFill
              size={24}
              className={`transition-all ${
                (hoverRating || currentRating) >= value ? "text-amber-500" : "text-input"
              } group-hover:scale-110`}
            />
            <span className="sr-only">
              {value} star{value === "1" ? "" : "s"}
            </span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
