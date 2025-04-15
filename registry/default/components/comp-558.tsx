"use client"

import type React from "react"
import { useFileUpload, formatBytes } from "@/registry/default/hooks/use-file-upload"
import { XIcon, AlertCircleIcon, FileIcon, FileTextIcon, FileArchiveIcon, FileSpreadsheetIcon, VideoIcon, HeadphonesIcon, ImageIcon, UploadIcon, Trash2Icon, UploadCloudIcon, DownloadIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const initialFiles = [
  {
    name: "document.pdf",
    size: 528737,
    type: "application/pdf",
    url: "https://originui.com",
    id: "document.pdf-1744638436563-8u5xuls"
  },
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://originui.com",
    id: "intro.zip-1744638436563-8u5xuls"
  },
  {
    name: "conclusion.xlsx",
    size: 352873,
    type: "application/xlsx",
    url: "https://originui.com",
    id: "conclusion.xlsx-1744638436563-8u5xuls"
  }
]

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type
  const fileName = file.file instanceof File ? file.file.name : file.file.name

  if ((fileType.includes("pdf") || fileName.endsWith(".pdf")) ||
    (fileType.includes("word") || fileName.endsWith(".doc") || fileName.endsWith(".docx"))) {
    return <FileTextIcon className="opacity-60 size-4" />
  } else if (fileType.includes("zip") || fileType.includes("archive") ||
    fileName.endsWith(".zip") || fileName.endsWith(".rar")) {
    return <FileArchiveIcon className="opacity-60 size-4" />
  } else if (fileType.includes("excel") ||
    fileName.endsWith(".xls") || fileName.endsWith(".xlsx")) {
    return <FileSpreadsheetIcon className="opacity-60 size-4" />
  } else if (fileType.includes("video/")) {
    return <VideoIcon className="opacity-60 size-4" />
  } else if (fileType.includes("audio/")) {
    return <HeadphonesIcon className="opacity-60 size-4" />
  } else if (fileType.startsWith("image/")) {
    return <ImageIcon className="opacity-60 size-4" />
  }
  return <FileIcon className="opacity-60 size-4" />
}

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
        className="rounded-xl flex flex-col items-center not-data-[files]:justify-center border border-dashed border-input transition-colors p-4 data-[dragging=true]:bg-accent/50 min-h-56 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 has-[input:focus]:ring-[3px] data-[files]:hidden"
      >
        <input {...getInputProps()} aria-label="Upload files" />
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-background flex size-11 shrink-0 items-center justify-center rounded-full border mb-2" aria-hidden="true">
            <FileIcon className="size-4 opacity-60" />
          </div>
          <p className="text-sm font-medium mb-1.5">Upload files</p>
          <p className="text-xs text-muted-foreground">Max {maxFiles} files ∙ Up to {maxSize}MB</p>
          <Button variant="outline" className="mt-4" onClick={openFileDialog}>
            <UploadIcon className="opacity-60 -ms-1" aria-hidden="true" />
            Select files
          </Button>
        </div>
      </div>
      {files.length > 0 && (
        <>
          {/* Table with files */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-medium">Files ({files.length})</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={openFileDialog}
              >
                <UploadCloudIcon className="opacity-60 -ms-0.5 size-3.5" aria-hidden="true" />
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
          <div className="bg-background overflow-hidden rounded-md border">
            <Table>
              <TableHeader className="text-xs">
                <TableRow className="bg-muted/50">
                  <TableHead className="h-9 py-2">Name</TableHead>
                  <TableHead className="h-9 py-2">Type</TableHead>
                  <TableHead className="h-9 py-2">Size</TableHead>
                  <TableHead className="h-9 py-2 text-right w-0">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-[13px]">
                {files.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell className="py-2 font-medium max-w-48">
                      <span className="flex items-center gap-2">
                        <span className="shrink-0">{getFileIcon(file)}</span> <span className="truncate">{file.file.name}</span>
                      </span>
                    </TableCell>
                    <TableCell className="py-2 text-muted-foreground">{file.file.type.split('/')[1]?.toUpperCase() || 'UNKNOWN'}</TableCell>
                    <TableCell className="py-2 text-muted-foreground">{formatBytes(file.file.size)}</TableCell>
                    <TableCell className="py-2 text-right whitespace-nowrap">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground/80 hover:text-foreground hover:bg-transparent size-8"
                        aria-label={`Download ${file.file.name}`}
                        onClick={() => window.open(file.preview, '_blank')}
                      >
                        <DownloadIcon className="size-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground/80 hover:text-foreground hover:bg-transparent size-8"
                        aria-label={`Remove ${file.file.name}`}
                        onClick={() => removeFile(file.id)}
                      >
                        <Trash2Icon className="size-4" />
                      </Button>                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div> 
        </>
      )}

      {errors.length > 0 && (
        <div className="flex items-center text-destructive text-xs gap-1" role="alert">
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      <p aria-live="polite" role="region" className="text-muted-foreground text-xs mt-2 text-center">
        Multiple files uploader w/ table
      </p>
    </div>
  )
}
