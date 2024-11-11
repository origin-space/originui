// Dependencies: pnpm install emblor
// Add the following to tailwind.config.ts: "./node_modules/emblor/dist/index.mjs",

"use client";

import { Label } from "@/components/ui/label";
import { Tag, TagInput } from "emblor";
import { useState } from "react";

const tags = [
  {
    id: "1",
    text: "Red",
  },
];

export default function Input57() {
  const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-57">Input with inner tags</Label>
      <TagInput
        id="input-57"
        tags={exampleTags}
        setTags={(newTags) => {
          setExampleTags(newTags);
        }}
        placeholder="Add a tag"
        styleClasses={{
          inlineTagsContainer:
            "border-input rounded-lg bg-background shadow-sm shadow-black/5 ring-offset-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 p-1 gap-1",
          input: "w-full min-w-[80px] focus-visible:outline-none shadow-none px-2 h-7",
          tag: {
            body: "h-7 relative bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
            closeButton:
              "absolute -inset-y-px -end-px p-0 rounded-e-lg flex size-7 border border-transparent ring-offset-background transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 text-muted-foreground/80 hover:text-foreground",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
      />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/JaleelB/emblor"
          target="_blank"
          rel="noopener nofollow"
        >
          emblor
        </a>
      </p>
    </div>
  );
}
