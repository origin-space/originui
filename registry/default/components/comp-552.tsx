"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { XIcon, ImageUpIcon, AlertCircleIcon } from "lucide-react"
export default function Component() {
  const [image, setImage] = useState<string | undefined>(undefined)
  const maxSize = 5 * 1024 * 1024 // 5MB default

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({
    maxFiles: 1,
    accept: "image/*",
    multiple: false,
    maxSize,
  })

  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      setImage(undefined)
      if (files.length > 0) {
        removeFile(files[0].id)
      }
    },
    [files, removeFile],
  )

  // Update image when files change
  useEffect(() => {
    if (files.length > 0) {
      setImage(files[0].preview)
    }
  }, [files])

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="rounded-xl flex flex-col items-center justify-center border border-dashed border-input has-[img]:border-none not-has-disabled:hover:bg-accent/50 transition-colors not-has-[img]:px-4 not-has-[img]:py-5 data-[dragging=true]:bg-accent/50 aspect-video overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} />
        {image ? (
          <div className="relative size-full">
            <img src={image} alt="Uploaded image" className="size-full object-cover" />
            {image && (
              <div className="absolute top-4 right-4">
                <button
                  type="button"
                  className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                  onClick={handleRemove}
                  aria-label="Remove image"
                >
                  <XIcon size={16} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
              <ImageUpIcon className="size-4 opacity-80" />
            </div>
            <p className="text-sm font-medium mb-1.5">Drop your image here or click to browse</p>
            <p className="text-xs text-muted-foreground">Max size: {formatBytes(maxSize)}</p>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
    </div>
  )
}
