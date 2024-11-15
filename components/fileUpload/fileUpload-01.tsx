"use client";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button, DropZone, FileDropItem, FileTrigger } from "react-aria-components";

const FileUpload01 = () => {
  const [file, setFile] = useState<FileDropItem | null>(null);
  return (
    <div className="space-y-2">
      <Label>Simple File Input</Label>
      <DropZone
        className="flex w-full items-center justify-start gap-x-2"
        onDrop={(e) => {
          let files = e.items.filter((item) => item.kind === "file") as FileDropItem[];
          setFile(files[0]);
        }}
      >
        <FileTrigger
          onSelect={(e) => {
            const file = e?.item(0);
            setFile(file as FileDropItem | null);
          }}
        >
          <Button
            className={
              "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
            }
          >
            Upload File
          </Button>
        </FileTrigger>
        <p
          className="max-w-[30ch] truncate text-xs text-muted-foreground"
          role="region"
          aria-live="polite"
        >
          {file ? file.name : "No file selected"}
        </p>
      </DropZone>
    </div>
  );
};

export default FileUpload01;
