"use client"

import {
  AlertCircleIcon,
  DownloadIcon,
  FileArchiveIcon,
  FileIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  HeadphonesIcon,
  ImageIcon,
  Trash2Icon,
  UploadCloudIcon,
  UploadIcon,
  VideoIcon,
} from "lucide-react"

import {
  formatBytes,
  useFileUpload,
} from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

// Create some dummy initial files
const initialFiles = [
  {
    name: "document.pdf",
    size: 528737,
    type: "application/pdf",
    url: "https://originui.com",
    id: "document.pdf-1744638436563-8u5xuls",
  },
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://originui.com",
    id: "intro.zip-1744638436563-8u5xuls",
  },
  {
    name: "conclusion.xlsx",
    size: 352873,
    type: "application/xlsx",
    url: "https://originui.com",
    id: "conclusion.xlsx-1744638436563-8u5xuls",
  },
]

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type
  const fileName = file.file instanceof File ? file.file.name : file.file.name

  if (
    fileType.includes("pdf") ||
    fileName.endsWith(".pdf") ||
    fileType.includes("word") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx")
  ) {
    return <FileTextIcon className="size-4 opacity-60" />
  } else if (
    fileType.includes("zip") ||
    fileType.includes("archive") ||
    fileName.endsWith(".zip") ||
    fileName.endsWith(".rar")
  ) {
    return <FileArchiveIcon className="size-4 opacity-60" />
  } else if (
    fileType.includes("excel") ||
    fileName.endsWith(".xls") ||
    fileName.endsWith(".xlsx")
  ) {
    return <FileSpreadsheetIcon className="size-4 opacity-60" />
  } else if (fileType.includes("video/")) {
    return <VideoIcon className="size-4 opacity-60" />
  } else if (fileType.includes("audio/")) {
    return <HeadphonesIcon className="size-4 opacity-60" />
  } else if (fileType.startsWith("image/")) {
    return <ImageIcon className="size-4 opacity-60" />
  }
  return <FileIcon className="size-4 opacity-60" />
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
        className="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-56 flex-col items-center rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px] data-[files]:hidden"
      >
        <input
          {...getInputProps()}
          className="sr-only"
          aria-label="Upload files"
        />
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <FileIcon className="size-4 opacity-60" />
          </div>
          <p className="mb-1.5 text-sm font-medium">Upload files</p>
          <p className="text-muted-foreground text-xs">
            Max {maxFiles} files ∙ Up to {formatBytes(maxSize)}
          </p>
          <Button variant="outline" className="mt-4" onClick={openFileDialog}>
            <UploadIcon className="-ms-1 opacity-60" aria-hidden="true" />
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
              <Button variant="outline" size="sm" onClick={openFileDialog}>
                <UploadCloudIcon
                  className="-ms-0.5 size-3.5 opacity-60"
                  aria-hidden="true"
                />
                Add files
              </Button>
              <Button variant="outline" size="sm" onClick={clearFiles}>
                <Trash2Icon
                  className="-ms-0.5 size-3.5 opacity-60"
                  aria-hidden="true"
                />
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
                  <TableHead className="h-9 w-0 py-2 text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-[13px]">
                {files.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell className="max-w-48 py-2 font-medium">
                      <span className="flex items-center gap-2">
                        <span className="shrink-0">{getFileIcon(file)}</span>{" "}
                        <span className="truncate">{file.file.name}</span>
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground py-2">
                      {file.file.type.split("/")[1]?.toUpperCase() || "UNKNOWN"}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-2">
                      {formatBytes(file.file.size)}
                    </TableCell>
                    <TableCell className="py-2 text-right whitespace-nowrap">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent"
                        aria-label={`Download ${file.file.name}`}
                        onClick={() => window.open(file.preview, "_blank")}
                      >
                        <DownloadIcon className="size-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent"
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
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-center text-xs"
      >
        Multiple files uploader w/ table ∙{" "}
        <a
          href="https://github.com/origin-space/originui/tree/main/docs/use-file-upload.md"
          className="hover:text-foreground underline"
        >
          API
        </a>
      </p>
    </div>
  )
}
