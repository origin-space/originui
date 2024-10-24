"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

export default function Checkbox13() {
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked === true && inputRef.current) {
      inputRef.current.focus();
    }
  }, [checked]);

  return (
    <div>
      <div className="items-top flex space-x-2">
        <Checkbox
          id="checkbox-13"
          checked={checked}
          onCheckedChange={setChecked}
          aria-controls="checkbox-input-13"
        />
        <div className="grow">
          <div className="grid gap-1">
            <Label htmlFor="checkbox-13">Checkbox with expansion</Label>
            <p id="checkbox-13-description" className="text-xs text-muted-foreground">
              You can use this checkbox with a label and a description.
            </p>
          </div>
          {/* Expandable field */}
          <div
            role="region"
            id="checkbox-input-13"
            aria-labelledby="checkbox-13"
            className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
            data-state={checked ? "expanded" : "collapsed"}
          >
            <div className="-m-2 overflow-hidden p-2">
              <div className="mt-3">
                <Input
                  ref={inputRef}
                  type="text"
                  id="checkbox-13-additional-info"
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
