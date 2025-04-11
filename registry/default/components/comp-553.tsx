"use client"

import type React from "react"
import { useCallback, useEffect, useState } from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { XIcon, UploadIcon, AlertCircleIcon, FileIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const maxSize = 1 * 1024 * 1024 // 10MB default
  const accept = "*"
  const maxFiles = 3

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    multiple: true,
    maxFiles,
    accept,
    maxSize,
  })

  // Update selected files when files change
  useEffect(() => {
    setSelectedFiles(files.map((f) => f.file))
  }, [files])

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
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="rounded-xl flex flex-col items-center justify-center border border-dashed border-input not-has-disabled:hover:bg-accent/50 transition-colors duration-200 px-4 py-5 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
            <UploadIcon className="size-4 opacity-80" />
          </div>
          <p className="text-sm font-medium mb-0.5">{maxFiles > 1 ? "Upload files" : "Upload a file"}</p>
          <p className="text-xs text-muted-foreground mb-3">Drag & drop or click to browse</p>
          <div className="flex flex-wrap justify-center gap-1 text-xs text-muted-foreground/70">
            <span>All files</span>
            <span>•</span>
            <span>Max {maxFiles > 1 ? `${maxFiles} files` : "1 file"}</span>
            <span>•</span>
            <span>Up to {formatBytes(maxSize)}</span>
          </div>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1">
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
              className="flex items-center justify-between gap-2 px-4 py-3 bg-accent/50 rounded-xl border"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <FileIcon className="size-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
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
                <XIcon className="size-4" aria-hidden="true" />
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
    </div>
  )
}
