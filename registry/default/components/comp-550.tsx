"use client"

import { CircleUserRoundIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [{ files, isDragging },
    { removeFile, openFileDialog, getInputProps, handleDragEnter, handleDragLeave, handleDragOver, handleDrop }] = useFileUpload({
    accept: "image/*"
  })

  const previewUrl = files[0]?.preview || null

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative inline-flex">
        <div
          className="relative flex items-center justify-center size-16 rounded-full border border-dashed border-input has-[img]:border-none not-has-disabled:hover:bg-accent/50 transition-colors data-[dragging=true]:bg-accent/50 overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <img
              className="size-full object-cover"
              src={previewUrl}
              alt={files[0]?.file?.name || "Uploaded image"}
              width={64}
              height={64}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="size-6 opacity-60" size={16} />
            </div>
          )}
        </div>
        {previewUrl && (
          <Button
            onClick={() => removeFile(files[0]?.id)}
            size="icon"
            variant="destructive"
            className="absolute -top-1 -right-1 size-6 rounded-full border-2 border-background shadow-none focus-visible:border-background"
            aria-label="Remove image"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}
        <input {...getInputProps()} aria-label="Upload image file" />
      </div>
      <p aria-live="polite" role="region" className="text-muted-foreground text-xs mt-2">
        Avatar uploader with droppable area
      </p>
    </div>
  )
}
