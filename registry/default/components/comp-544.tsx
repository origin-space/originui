"use client"

import { CircleUserRoundIcon, PencilIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload-p"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    fileName,
  } = useFileUpload()

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div
          className="border-input bg-muted relative flex size-24 items-center justify-center overflow-hidden rounded-full border"
          aria-label={previewUrl ? "Preview of uploaded avatar" : "Default user avatar"}
        >
          {previewUrl ? (
            <img
              className="size-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded avatar"
              width={96}
              height={96}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="opacity-60" size={40} />
            </div>
          )}
        </div>
        <Button
          onClick={handleThumbnailClick}
          size="icon"
          className="border-background absolute bottom-0 right-0 size-8 rounded-full border-2 shadow-sm"
          aria-label={previewUrl ? "Change avatar" : "Upload avatar"}
        >
          <PencilIcon size={14} />
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload avatar image"
        />
      </div>
      {fileName && (
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground text-sm truncate max-w-[200px]">
            {fileName}
          </p>
          <button
            onClick={() => handleRemove()}
            className="text-xs font-medium text-red-500 hover:underline"
            aria-label={`Remove ${fileName}`}
          >
            Remove
          </button>
        </div>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl ? "Avatar uploaded and preview available" : "No avatar uploaded"}
      </div>
    </div>
  )
}
