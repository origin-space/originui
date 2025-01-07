"use client";

import { Checkbox } from "@/registry/default/ui/checkbox";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { useEffect, useId, useRef, useState } from "react";

export default function Component() {
  const checkboxId = useId();
  const inputId = useId();
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked === true && inputRef.current) {
      inputRef.current.focus();
    }
  }, [checked]);

  return (
    <div>
      <div className="flex items-start gap-2">
        <Checkbox
          id={checkboxId}
          checked={checked}
          onCheckedChange={setChecked}
          aria-describedby={`${checkboxId}-description`}
          aria-controls={inputId}
        />
        <div className="grow">
          <div className="grid gap-2">
            <Label htmlFor={checkboxId}>Checkbox with expansion</Label>
            <p id={`${checkboxId}-description`} className="text-xs text-muted-foreground">
              You can use this checkbox with a label and a description.
            </p>
          </div>
          {/* Expandable field */}
          <div
            role="region"
            id={inputId}
            aria-labelledby={checkboxId}
            className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
            data-state={checked ? "expanded" : "collapsed"}
          >
            <div className="pointer-events-none -m-2 overflow-hidden p-2">
              <div className="pointer-events-auto mt-3">
                <Input
                  ref={inputRef}
                  type="text"
                  id="checkbox-11-additional-info"
                  placeholder="Enter details"
                  aria-label="Additional Information"
                  disabled={!checked}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
