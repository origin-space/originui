"use client"

import type React from "react"
import { formatBytes, useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { ImageIcon, AlertCircleIcon, UploadIcon, XIcon, FileTextIcon, FileArchiveIcon, FileSpreadsheetIcon, VideoIcon, HeadphonesIcon, FileIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

// Create a dummy image file
const initialFiles = [
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://example.com/intro.zip",
    id: "intro.zip-1744638436563-8u5xuls"
  },  
  {
    name: "image-01.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=1",
    id: "image-01-123456789"
  },
  {
    name: "audio.mp3",
    size: 1528737,
    type: "audio/mpeg",
    url: "https://example.com/audio.mp3",
    id: "audio-123456789"
  }
]

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type
  const fileName = file.file instanceof File ? file.file.name : file.file.name

  const iconMap = {
    pdf: { icon: FileTextIcon, conditions: (type: string, name: string) => 
      type.includes("pdf") || name.endsWith(".pdf") || 
      type.includes("word") || name.endsWith(".doc") || name.endsWith(".docx") },
    archive: { icon: FileArchiveIcon, conditions: (type: string, name: string) => 
      type.includes("zip") || type.includes("archive") || 
      name.endsWith(".zip") || name.endsWith(".rar") },
    excel: { icon: FileSpreadsheetIcon, conditions: (type: string, name: string) => 
      type.includes("excel") || name.endsWith(".xls") || name.endsWith(".xlsx") },
    video: { icon: VideoIcon, conditions: (type: string) => type.includes("video/") },
    audio: { icon: HeadphonesIcon, conditions: (type: string) => type.includes("audio/") },
    image: { icon: ImageIcon, conditions: (type: string) => type.startsWith("image/") }
  }

  for (const { icon: Icon, conditions } of Object.values(iconMap)) {
    if (conditions(fileType, fileName)) {
      return <Icon className="opacity-60 size-5" />
    }
  }

  return <FileIcon className="opacity-60 size-5" />
}

const getFilePreview = (file: { file: File | { type: string; name: string; url?: string } }) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type
  const fileName = file.file instanceof File ? file.file.name : file.file.name

  const renderImage = (src: string) => (
    <img
      src={src}
      alt={fileName}
      className="size-full object-cover rounded-t-[inherit]"
    />
  )

  return (
    <div className="aspect-square bg-accent flex items-center justify-center rounded-t-[inherit] overflow-hidden">
      {fileType.startsWith("image/") ? (
        file.file instanceof File ? (
          (() => {
            const previewUrl = URL.createObjectURL(file.file)
            return renderImage(previewUrl)
          })()
        ) : file.file.url ? (
          renderImage(file.file.url)
        ) : (
          <ImageIcon className="opacity-60 size-5" />
        )
      ) : (
        getFileIcon(file)
      )}
    </div>
  )
}

export default function Component() {
  const maxSizeMB = 5
  const maxSize = maxSizeMB * 1024 * 1024 // 5MB default
  const maxFiles = 6

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, clearFiles, getInputProps },
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
        className="relative rounded-xl flex flex-col items-center not-data-[files]:justify-center border border-dashed border-input transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-52 overflow-hidden has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px]"
      >
        <input {...getInputProps()} aria-label="Upload image file" />
        {files.length > 0 ? (
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-medium truncate">Files ({files.length})</h3>
              <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={openFileDialog}
              >
                <UploadIcon className="opacity-60 -ms-0.5 size-3.5" aria-hidden="true" />
                Add files
              </Button>            
              <Button
                variant="outline"
                size="sm"
                onClick={clearFiles}
              >
                <Trash2Icon className="opacity-60 -ms-0.5 size-3.5" aria-hidden="true" />
                Remove all
              </Button>
            </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {files.map((file) => (
                <div key={file.id} className="relative flex flex-col border rounded-md bg-background">
                  {getFilePreview(file)}
                  <Button
                    onClick={() => removeFile(file.id)}
                    size="icon"
                    className="absolute -top-2 -right-2 size-6 rounded-full border-2 border-background shadow-none focus-visible:border-background"
                    aria-label="Remove image"
                  >
                    <XIcon className="size-3.5" />
                  </Button>
                  <div className="min-w-0 flex flex-col gap-0.5 p-3 border-t">
                    <p className="text-[13px] font-medium truncate">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {formatBytes(file.file.size)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
              <ImageIcon className="size-4 opacity-60" />
            </div>
            <p className="text-sm font-medium mb-1.5">Drop your files here</p>
            <p className="text-xs text-muted-foreground">Max {maxFiles} files ∙ Up to {maxSizeMB}MB</p>
            <Button variant="outline" className="mt-4" onClick={openFileDialog}>
              <UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
              Select images
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
        Mixed content w/ card
      </p>
    </div>
  )
}
