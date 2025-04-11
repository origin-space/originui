"use client"

import { useCallback, useState } from "react"
import { FileIcon, UploadIcon, XIcon } from "lucide-react"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload-p"
import { Button } from "@/registry/default/ui/button"

export default function Component() {
  const {
    files,
    fileInputRef,
    handleFileChange,
    handleRemove,
    formatFileSize,
  } = useFileUpload({
    multiple: false,
    accept: "*/*",
  })
  
  const [isDragging, setIsDragging] = useState(false)
  
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
      // Add the first file
      dataTransfer.items.add(droppedFiles[0])
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

  const file = files[0]

  return (
    <div className="w-full max-w-md">
      <div 
        className={`border-input bg-background relative flex min-h-[180px] w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-4 transition-colors ${
          isDragging ? "border-primary bg-primary/5" : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="w-full">
            <div className="border-input bg-background flex items-center justify-between gap-2 rounded-lg border p-3">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded">
                  <FileIcon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-muted-foreground text-xs">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <Button
                onClick={() => handleRemove(file.id)}
                size="icon"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground size-8"
                aria-label="Remove file"
              >
                <XIcon size={16} />
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
              <FileIcon size={24} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-medium">
                <span className="text-primary font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-muted-foreground text-xs">
                PDF, DOC, XLS, ZIP, etc. (max. 10MB)
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={handleButtonClick}
            >
              <UploadIcon size={16} className="mr-2" />
              Select File
            </Button>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          aria-label="Upload file"
        />
      </div>
    </div>
  )
}
