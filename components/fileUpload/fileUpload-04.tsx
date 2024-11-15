"use client";

import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useState } from "react";
import { Button, DropZone, FileDropItem, FileTrigger } from "react-aria-components";

const FileUpload04 = () => {
  const [file, setFile] = useState<FileDropItem | null>(null);
  return (
    <div className="space-y-2">
      <Label>File Upload with end icon</Label>
      <DropZone
        className="flex w-full flex-col items-start justify-center gap-y-2"
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
              "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0"
            }
          >
            Upload File
            <Upload
              className="-me-1 ms-2 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </FileTrigger>
        <p
          className="max-w-[20ch] truncate text-xs text-muted-foreground"
          role="region"
          aria-live="polite"
        >
          {file?.name}
        </p>
      </DropZone>
    </div>
  );
};

export default FileUpload04;
