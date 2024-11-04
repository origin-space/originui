"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useRef } from "react";

export default function Textarea19() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const defaultRows = 1;
  const maxRows = undefined; // You can set a max number of rows

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";

    const style = window.getComputedStyle(textarea);
    const borderHeight = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
    const paddingHeight = parseInt(style.paddingTop) + parseInt(style.paddingBottom);

    const lineHeight = parseInt(style.lineHeight);
    const maxHeight = maxRows ? lineHeight * maxRows + borderHeight + paddingHeight : Infinity;

    const newHeight = Math.min(textarea.scrollHeight + borderHeight, maxHeight);

    textarea.style.height = `${newHeight}px`;
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="textarea-19">Autogrowing textarea</Label>
      <Textarea
        id="textarea-19"
        placeholder="Leave a comment"
        ref={textareaRef}
        onChange={handleInput}
        rows={defaultRows}
        className="min-h-[none] resize-none"
      />
    </div>
  );
}
