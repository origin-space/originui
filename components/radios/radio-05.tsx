"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useRef, useState } from "react";

export default function Radio05() {
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
            id="radio-05-with-expansion"
            aria-describedby="radio-05-with-expansion-description"
            aria-controls="radio-input-05"
          />
          <div className="grow">
            <div className="grid grow gap-2">
              <Label htmlFor="radio-05-with-expansion">Radio with expansion</Label>
              <p id="radio-05-with-expansion-description" className="text-xs text-muted-foreground">
                You can use this radio with a label and a description.
              </p>
            </div>
            {/* Expandable field */}
            <div
              role="region"
              id="radio-input-05"
              aria-labelledby="radio-05-with-expansion"
              className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
              data-state={selectedValue === "with-expansion" ? "expanded" : "collapsed"}
            >
              <div className="-m-2 overflow-hidden p-2">
                <div className="mt-3">
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
          id="radio-05-without-expansion"
          aria-describedby="radio-05-without-expansion-description"
        />
        <div className="grid grow gap-2">
          <Label htmlFor="radio-05-without-expansion">Radio without expansion</Label>
          <p id="radio-05-without-expansion-description" className="text-xs text-muted-foreground">
            You can use this checkbox with a label and a description.
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
