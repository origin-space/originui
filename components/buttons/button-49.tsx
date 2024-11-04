// Dependencies: pnpm install lucide-react

"use client";

import { Button } from "@/components/ui/button";
import { CircleUserRound, X } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

export default function Button49() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleThumbnailClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      console.log("File selected:", file);
    }
  }, []);

  const handleRemove = useCallback(() => {
    setFileName(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  return (
    <div>
      <div className="relative inline-flex">
        <Button
          variant="outline"
          className="relative size-16 overflow-hidden"
          onClick={handleThumbnailClick}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <Image
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              layout="fill"
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRound className="opacity-60" size={16} strokeWidth={2} />
            </div>
          )}
        </Button>
        {previewUrl && (
          <Button
            onClick={handleRemove}
            size="icon"
            variant="destructive"
            className="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background"
            aria-label="Remove image"
          >
            <X size={16} />
          </Button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload image file"
        />
      </div>
      {fileName && (
        <p className="mt-2 text-xs text-muted-foreground lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100">
          {fileName}
        </p>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Image uploaded and preview available" : "No image uploaded"}
      </div>
    </div>
  );
}
