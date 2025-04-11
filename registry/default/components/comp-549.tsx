"use client"

import { useCallback, useState } from "react"
import {
  FileIcon,
  FileTextIcon,
  FileImageIcon,
  FileArchiveIcon,
  FileSpreadsheetIcon,
  XIcon,
  UploadIcon,
  EyeIcon,
  DownloadIcon,
} from "lucide-react"

import { FileInfo, useFileUpload } from "@/registry/default/hooks/use-file-upload-p"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/dialog"

export default function Component() {
  const {
    files,
    fileInputRef,
    handleFileChange,
    handleRemove,
    formatFileSize,
  } = useFileUpload({
    multiple: true,
    accept: "image/*,application/pdf",
    maxFiles: 5,
  })
  
  const [isDragging, setIsDragging] = useState(false)
  const [previewFile, setPreviewFile] = useState<FileInfo | null>(null)
  
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) {
      setIsDragging(true)
    }
  }, [isDragging])
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles && droppedFiles.length > 0 && fileInputRef.current) {
      // Create a new DataTransfer object
      const dataTransfer = new DataTransfer()
      // Add all dropped files
      Array.from(droppedFiles).forEach(file => {
        dataTransfer.items.add(file)
      })
      // Set the files property of the input element
      fileInputRef.current.files = dataTransfer.files
      // Trigger the onChange event
      const event = new Event('change', { bubbles: true })
      fileInputRef.current.dispatchEvent(event)
    }
  }, [fileInputRef])
  
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const getFileIcon = (file: FileInfo) => {
    const type = file.type
    
    if (type.startsWith('image/')) {
      return <FileImageIcon size={20} className="text-blue-500" />
    } else if (type.includes('spreadsheet') || type.includes('excel') || type.includes('csv')) {
      return <FileSpreadsheetIcon size={20} className="text-green-500" />
    } else if (type.includes('zip') || type.includes('compressed') || type.includes('archive')) {
      return <FileArchiveIcon size={20} className="text-yellow-500" />
    } else if (type.includes('text') || type.includes('document') || type.includes('pdf')) {
      return <FileTextIcon size={20} className="text-purple-500" />
    } else {
      return <FileIcon size={20} className="text-gray-500" />
    }
  }

  const isImage = (file: FileInfo) => file.type.startsWith('image/')
  const isPdf = (file: FileInfo) => file.type.includes('pdf')

  return (
    <div className="w-full max-w-2xl">
      <div 
        className={`border-input bg-background relative flex min-h-[180px] w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-4 transition-colors ${
          isDragging ? "border-primary bg-primary/5" : ""
        } ${files.length > 0 ? "h-auto" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {files.length > 0 ? (
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Uploaded Files ({files.length})</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleButtonClick}
                className="text-xs h-8"
                disabled={files.length >= 5}
              >
                <UploadIcon size={14} className="mr-1" />
                Add more
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {files.map((file) => (
                <div key={file.id} className="border-input bg-card group relative flex flex-col rounded-lg border overflow-hidden">
                  <div className="relative h-32 w-full overflow-hidden bg-muted">
                    {isImage(file) ? (
                      <img 
                        src={file.url} 
                        alt={file.name}
                        className="size-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center">
                        {getFileIcon(file)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        onClick={() => setPreviewFile(file)}
                      >
                        <EyeIcon size={14} />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        onClick={() => window.open(file.url, '_blank')}
                      >
                        <DownloadIcon size={14} />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="size-8"
                        onClick={() => handleRemove(file.id)}
                      >
                        <XIcon size={14} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-muted-foreground text-xs">{formatFileSize(file.size)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
              <FileImageIcon size={24} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-medium">
                <span className="text-primary font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-muted-foreground text-xs">
                Images or PDF files (max. 5 files)
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={handleButtonClick}
            >
              <UploadIcon size={16} className="mr-2" />
              Select Files
            </Button>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,application/pdf"
          multiple
          aria-label="Upload files"
        />
      </div>

      {/* Preview Dialog */}
      <Dialog open={!!previewFile} onOpenChange={(open) => !open && setPreviewFile(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{previewFile?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 flex justify-center">
            {previewFile && isImage(previewFile) ? (
              <img 
                src={previewFile.url} 
                alt={previewFile.name}
                className="max-h-[70vh] max-w-full object-contain rounded"
              />
            ) : previewFile && isPdf(previewFile) ? (
              <iframe 
                src={previewFile.url} 
                title={previewFile.name}
                className="h-[70vh] w-full border-0 rounded"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8">
                <div className="bg-muted text-muted-foreground flex size-16 items-center justify-center rounded-full mb-4">
                  {previewFile && getFileIcon(previewFile)}
                </div>
                <p className="text-center">Preview not available for this file type</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => previewFile && window.open(previewFile.url, '_blank')}
                >
                  <DownloadIcon size={16} className="mr-2" />
                  Download File
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
