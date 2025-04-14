"use client"

import type React from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { XIcon, AlertCircleIcon, FileIcon, FileTextIcon, FileArchiveIcon, FileSpreadsheetIcon, FileVideoIcon, FileAudioIcon, ImageIcon, UploadIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

const initialFiles = [
  {
    name: "document.pdf",
    size: 528737,
    type: "application/pdf",
    url: "https://example.com/document.pdf",
    id: "document.pdf-1744638436563-8u5xuls"
  },
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://example.com/intro.zip",
    id: "intro.zip-1744638436563-8u5xuls"
  },
  {
    name: "conclusion.xlsx",
    size: 352873,
    type: "application/xlsx",
    url: "https://example.com/conclusion.xlsx",
    id: "conclusion.xlsx-1744638436563-8u5xuls"
  }
]

export default function Component() {
  const maxSize = 10 * 1024 * 1024 // 10MB default
  const maxFiles = 10

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
    maxSize,
    initialFiles,
  })

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
        className="rounded-xl flex flex-col items-center not-data-[files]:justify-center border border-dashed border-input transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-56 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} aria-label="Upload files" />

        {files.length > 0 ? (
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between fap-2">
              <h3 className="text-sm font-medium truncate">Uploaded Files ({files.length})</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={clearFiles}
                className="text-xs h-8"
              >
                <Trash2Icon className="opacity-60 -ms-0.5 size-3.5" aria-hidden="true" />
                Remove all
              </Button>
            </div>
            <div className="w-full space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between gap-2 p-3 pe-4 bg-background rounded-xl border"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="aspect-square size-10 shrink-0 border flex items-center justify-center rounded">
                      {(() => {
                        const fileType = file.file instanceof File ? file.file.type : file.file.type
                        const fileName = file.file instanceof File ? file.file.name : file.file.name

                        if (fileType.includes("pdf") || fileName.endsWith(".pdf")) {
                          return <FileTextIcon className="size-4" />
                        } else if (fileType.includes("zip") || fileType.includes("archive") ||
                          fileName.endsWith(".zip") || fileName.endsWith(".rar")) {
                          return <FileArchiveIcon className="size-4" />
                        } else if (fileType.includes("word") ||
                          fileName.endsWith(".doc") || fileName.endsWith(".docx")) {
                          return <FileTextIcon className="size-4" />
                        } else if (fileType.includes("excel") ||
                          fileName.endsWith(".xls") || fileName.endsWith(".xlsx")) {
                          return <FileSpreadsheetIcon className="size-4" />
                        } else if (fileType.includes("video/")) {
                          return <FileVideoIcon className="size-4" />
                        } else if (fileType.includes("audio/")) {
                          return <FileAudioIcon className="size-4" />
                        } else if (fileType.startsWith("image/")) {
                          return <ImageIcon className="size-4" />
                        }
                        return <FileIcon className="size-4" />
                      })()}
                    </div>
                    <div className="min-w-0 flex flex-col gap-0.5">
                      <p className="text-[13px] font-medium truncate">{file.file instanceof File ? file.file.name : file.file.name}</p>
                      <p className="text-xs text-muted-foreground">{formatBytes(file.file instanceof File ? file.file.size : file.file.size)}</p>
                    </div>
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-muted-foreground/80 hover:text-foreground hover:bg-transparent -me-2 size-8"
                    onClick={() => removeFile(file.id)}
                    aria-label="Remove file"
                  >
                    <XIcon className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              ))}

              {files.length < maxFiles && (
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={openFileDialog}
                >
                  <UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
                  Add more
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
              <FileIcon className="size-4 opacity-80" />
            </div>
            <p className="text-sm font-medium mb-0.5">Upload files</p>
            <p className="text-xs text-muted-foreground">Max 10 files ∙ Up to 10MB</p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
              Select files
            </Button>
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
        Multiple files uploader w/ list inside
      </p>
    </div>
  )
}
