"use client"

import type React from "react"
import { useCallback } from "react"
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { XIcon, ImageIcon, AlertCircleIcon, UploadIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const maxSize = 2 * 1024 * 1024 // 2MB default

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({
    maxFiles: 1,
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
  })
  const previewUrl = files[0]?.preview || null
  const fileName = files[0]?.file.name || null

  return (
    <div className="flex flex-col gap-2">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="rounded-xl flex flex-col items-center justify-center border border-dashed border-input transition-colors px-4 py-5 data-[dragging=true]:bg-accent/50 aspect-video overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} />
        {previewUrl ? (
          <div className="size-full flex items-center justify-center">
            <img src={previewUrl} alt="Uploaded image" className="max-h-full mx-auto object-contain rounded" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
              <ImageIcon className="size-4 opacity-80" />
            </div>
            <p className="text-sm font-medium mb-1.5">Click to upload or drag and drop</p>
            <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 2MB)</p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="opacity-60 ms-1 size-4" aria-hidden="true" />
              Select image
            </Button>            
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      {fileName && (
        <div className="flex justify-between gap-2 text-xs">
          <p className="text-muted-foreground truncate" aria-live="polite">
            {fileName}
          </p>
          <button
            onClick={() => removeFile(files[0]?.id)}
            className="font-medium text-destructive hover:underline"
            aria-label={`Remove ${fileName}`}
          >
            Remove
          </button>
        </div>
      )}      
    </div>
  )
}
