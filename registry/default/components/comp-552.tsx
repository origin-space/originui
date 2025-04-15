"use client"

import type React from "react"
import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { ImageIcon, AlertCircleIcon, UploadIcon, XIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const maxSizeMB = 2
  const maxSize = maxSizeMB * 1024 * 1024 // 2MB default

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
  })
  const previewUrl = files[0]?.preview || null
  const fileName = files[0]?.file.name || null

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">

        {/* Drop area */}
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="relative rounded-xl flex flex-col items-center justify-center border border-dashed border-input transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-52 overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
        >
          <input {...getInputProps()} aria-label="Upload image file" />
          {previewUrl ? (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img src={previewUrl} alt={files[0]?.file?.name || "Uploaded image"} className="max-h-full mx-auto object-contain rounded" />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
                <ImageIcon className="size-4 opacity-80" />
              </div>
              <p className="text-sm font-medium mb-1.5">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)</p>
              <Button variant="outline" className="mt-4" onClick={openFileDialog}>
                <UploadIcon className="opacity-60 -ms-1 size-4" aria-hidden="true" />
                Select image
              </Button>            
            </div>
          )}
        </div>

        {previewUrl && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove image"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}          
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}
      
      <p aria-live="polite" role="region" className="text-muted-foreground text-xs mt-2 text-center">
        Single image uploader w/ max size (drop area + button)
      </p>        
    </div>
  )
}
