"use client"

import type React from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { XIcon, UploadIcon, AlertCircleIcon, PaperclipIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const maxSize = 10 * 1024 * 1024 // 10MB default

  const initialFiles = [
    {
      file: new File(
        [new Blob([''], { type: 'application/pdf' })],
        "document.pdf",
        { type: "application/pdf" }
      ),
      id: "document.pdf-1744638436563-8u5xuls",
      preview: "/icons/pdf.svg"
    }
  ]

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    maxSize,
    initialFiles,
  })

  const file = files[0]

  return (
    <div className="flex flex-col gap-2">

      {/* Drop area */}
      <div
        role="button"
        onClick={openFileDialog}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-dragging={isDragging || undefined}
        className="rounded-xl flex flex-col items-center justify-center border border-dashed border-input has-disabled:opacity-50 has-disabled:pointer-events-none hover:bg-accent/50 transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-40 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} aria-label="Upload file" disabled={Boolean(file)} />

        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
            <UploadIcon className="size-4 opacity-80" />
          </div>
          <p className="text-sm font-medium mb-0.5">Upload file</p>
          <p className="text-xs text-muted-foreground">Drag & drop or click to browse (max. {formatBytes(maxSize)})</p>
        </div>
      </div>

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      {/* File list */}
      {file && (
        <div className="space-y-2">
          <div
            key={file.id}
            className="flex items-center justify-between gap-2 px-4 py-2 bg-accent/50 rounded-xl border"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <PaperclipIcon className="text-muted-foreground size-4 shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-xs font-medium truncate">{file.file.name}</p>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground/80 hover:text-foreground hover:bg-transparent -me-2 size-8"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove file"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      )}

      <p aria-live="polite" role="region" className="text-muted-foreground text-xs mt-2 text-center">
        Single file uploader w/ max size
      </p>         
    </div>
  )
}
