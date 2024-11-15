"use client";

import { Label } from "@/components/ui/label";
import { Paperclip } from "lucide-react";
import { useState } from "react";
import { Button, DropZone, FileDropItem, FileTrigger } from "react-aria-components";

const FileUpload05 = () => {
  const [file, setFile] = useState<FileDropItem | null>(null);
  return (
    <div className="space-y-2">
      <Label>File Upload with inserted button</Label>
      <DropZone
        className="flex w-max items-center justify-center gap-x-3 rounded-lg border border-input bg-background p-1.5 shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground"
        onDrop={(e) => {
          let files = e.items.filter((item) => item.kind === "file") as FileDropItem[];
          setFile(files[0]);
        }}
      >
        <Paperclip className="opacity-80" size={18} strokeWidth={2} aria-hidden="true" />
        <p
          className="w-[18ch] truncate text-xs text-muted-foreground"
          role="region"
          aria-live="polite"
        >
          {file ? file.name : "No file chosen"}
        </p>
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
            Upload
          </Button>
        </FileTrigger>
      </DropZone>
    </div>
  );
};

export default FileUpload05;
