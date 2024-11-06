// Dependencies: pnpm install emblor
// Add the following to tailwind.config.ts: "./node_modules/emblor/dist/index.mjs",

"use client";

import { Label } from "@/components/ui/label";
import { Tag, TagInput } from "emblor";
import { useState } from "react";

const tags = [
  {
    id: "1",
    text: "Sport",
  },
  {
    id: "2",
    text: "Coding",
  },
  {
    id: "3",
    text: "Travel",
  },
];

export default function Input56() {
  const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      <Label htmlFor="input-56">Input with tags</Label>
      <TagInput
        id="input-56"
        tags={exampleTags}
        setTags={(newTags) => {
          setExampleTags(newTags);
        }}
        placeholder="Add a tag"
        styleClasses={{
          tagList: {
            container: "gap-1",
          },
          input:
            "rounded-lg ring-offset-background transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
          tag: {
            body: "relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
            closeButton:
              "absolute -inset-y-px -end-px p-0 rounded-e-lg flex size-7 border border-transparent ring-offset-background transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 text-muted-foreground/80 hover:text-foreground",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
        inlineTags={false}
        inputFieldPosition="top"
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
