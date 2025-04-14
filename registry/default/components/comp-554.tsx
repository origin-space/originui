"use client"

import type React from "react"
import { formatBytes, useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { ImageIcon, AlertCircleIcon, UploadIcon, XIcon, FileIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { useCallback } from "react"

export default function Component() {
  const maxSizeMB = 5
  const maxSize = maxSizeMB * 1024 * 1024 // 5MB default
  const maxFiles = 6

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, clearFiles, getInputProps },
  ] = useFileUpload({
    accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
    maxSize,
    multiple: true,
    maxFiles,
  })

  const handleRemoveFile = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation()
      e.preventDefault()
      removeFile(id)
    },
    [removeFile],
  )  

  return (
    <div className="flex flex-col gap-2">

      {/* Drop area */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        data-files={files.length > 0 || undefined}
        className="relative rounded-xl flex flex-col items-center not-data-[files]:justify-center border border-dashed border-input transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-52 overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} aria-label="Upload image file" />
        <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
          <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
            <ImageIcon className="size-4 opacity-80" />
          </div>
          <p className="text-sm font-medium mb-1.5">Click to upload or drag and drop</p>
          <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)</p>
          <Button variant="outline" className="mt-4" onClick={openFileDialog}>
            <UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
            Select images
          </Button>            
        </div>
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between gap-2 p-3 bg-background rounded-xl border"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="aspect-square shrink-0">
                  <img 
                    src={file.preview} 
                    alt={file.file.name}
                    className="size-10 object-cover rounded"
                  />
                </div>
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="text-xs font-medium truncate">{file.file.name}</p>
                  <p className="text-xs text-muted-foreground">{formatBytes(file.file.size)}</p>
                </div>
              </div>

              <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground/80 hover:text-foreground hover:bg-transparent -me-2 size-8"
                onClick={(e) => handleRemoveFile(e, file.id)}
                aria-label="Remove file"
              >
                <XIcon aria-hidden="true" />
              </Button>
            </div>
          ))}

          {/* Remove all files button */}
          {files.length > 1 && (
            <div>
              <Button
                size="sm"
                variant="outline"
                onClick={clearFiles}
              >
                Remove all files
              </Button>
            </div>
          )}
        </div>
      )}      
      
      <p aria-live="polite" role="region" className="text-muted-foreground text-xs mt-2 text-center">
        Multiple image uploader w/ image list
      </p>        
    </div>
  )
}
