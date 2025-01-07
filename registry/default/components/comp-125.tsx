"use client";

import { useImageUpload } from "@/registry/default/hooks/use-image-upload";
import { Button } from "@/registry/default/ui/button";
import { CircleUserRound } from "lucide-react";

export default function Component() {
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick: handleButtonClick,
    handleFileChange,
    handleRemove,
    fileName,
  } = useImageUpload();

  return (
    <div>
      <div className="inline-flex items-center gap-2 align-top">
        <div
          className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-input"
          aria-label={previewUrl ? "Preview of uploaded image" : "Default user avatar"}
        >
          {previewUrl ? (
            <img
              className="h-full w-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={32}
              height={32}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRound className="opacity-60" size={16} strokeWidth={2} />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <Button onClick={handleButtonClick} aria-haspopup="dialog">
            {fileName ? "Change image" : "Upload image"}
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
            aria-label="Upload image file"
          />
        </div>
      </div>
      {fileName && (
        <div className="mt-2">
          <div className="inline-flex gap-2 text-xs">
            <p className="truncate text-muted-foreground" aria-live="polite">
              {fileName}
            </p>{" "}
            <button
              onClick={handleRemove}
              className="font-medium text-red-500 hover:underline"
              aria-label={`Remove ${fileName}`}
            >
              Remove
            </button>
          </div>
        </div>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Image uploaded and preview available" : "No image uploaded"}
      </div>
    </div>
  );
}
