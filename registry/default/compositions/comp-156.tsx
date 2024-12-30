"use client";

import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { useEffect, useId, useRef, useState } from "react";

export default function Component() {
  const radioId = useId();
  const inputId = useId();
  const [selectedValue, setSelectedValue] = useState("without-expansion");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedValue === "with-expansion" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedValue]);

  return (
    <RadioGroup className="gap-6" value={selectedValue} onValueChange={setSelectedValue}>
      <div>
        <div className="flex items-start gap-2">
          <RadioGroupItem
            value="with-expansion"
            id={`${radioId}-1`}
            aria-describedby={`${radioId}-1-description`}
            aria-controls={inputId}
          />
          <div className="grow">
            <div className="grid grow gap-2">
              <Label htmlFor={`${radioId}-1`}>Radio with expansion</Label>
              <p id={`${radioId}-1-description`} className="text-xs text-muted-foreground">
                You can use this radio with a label and a description.
              </p>
            </div>
            {/* Expandable field */}
            <div
              role="region"
              id={inputId}
              aria-labelledby={`${radioId}-1`}
              className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
              data-state={selectedValue === "with-expansion" ? "expanded" : "collapsed"}
            >
              <div className="pointer-events-none -m-2 overflow-hidden p-2">
                <div className="pointer-events-auto mt-3">
                  <Input
                    ref={inputRef}
                    type="text"
                    id="radio-05-additional-info"
                    placeholder="Enter details"
                    aria-label="Additional Information"
                    disabled={selectedValue !== "with-expansion"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <RadioGroupItem
          value="without-expansion"
          id={`${radioId}-2`}
          aria-describedby={`${radioId}-2-description`}
        />
        <div className="grid grow gap-2">
          <Label htmlFor={`${radioId}-2`}>Radio without expansion</Label>
          <p id={`${radioId}-2-description`} className="text-xs text-muted-foreground">
            You can use this checkbox with a label and a description.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
