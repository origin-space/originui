"use client";

import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Autogrowing textarea</Label>
      <Textarea
        id={id}
        placeholder="Leave a comment"
        className="field-sizing-content max-h-29.5 min-h-[none] resize-none py-1.75"
      />
    </div>
  );
}
