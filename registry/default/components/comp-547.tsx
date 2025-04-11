"use client"

import { useCallback, useState } from "react"
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react"

import { FileInfo, useFileUpload } from "@/registry/default/hooks/use-file-upload-p"
import { Button } from "@/registry/default/ui/button"
import { Progress } from "@/registry/default/ui/progress"

export default function Component() {
  const {
    files,
    fileInputRef,
    handleFileChange,
    handleRemove,
    handleRemoveAll,
    formatFileSize,
  } = useFileUpload({
    multiple: true,
    accept: "*/*",
    maxFiles: 5,
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

  // Simulate file upload progress
  const getFileProgress = (file: FileInfo) => {
    // This would normally be based on actual upload progress
    // For demo purposes, we're using a random value between 0-100
    const hash = file.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return Math.min(100, hash % 100)
  }

  return (
    <div className="w-full max-w-md">
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
                variant="ghost" 
                size="sm" 
                onClick={handleRemoveAll}
                className="text-xs h-8"
              >
                Remove all
              </Button>
            </div>
            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.id} className="border-input bg-background flex items-start gap-3 rounded-lg border p-3">
                  <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded">
                    <FileIcon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <Button
                        onClick={() => handleRemove(file.id)}
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground size-6"
                        aria-label={`Remove ${file.name}`}
                      >
                        <XIcon size={14} />
                      </Button>
                    </div>
                    <p className="text-muted-foreground text-xs mb-1">{formatFileSize(file.size)}</p>
                    <Progress value={getFileProgress(file)} className="h-1" />
                  </div>
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={handleButtonClick}
              disabled={files.length >= 5}
            >
              <UploadCloudIcon size={16} className="mr-2" />
              {files.length >= 5 ? "Maximum files reached" : "Add more files"}
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
              <UploadCloudIcon size={24} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm font-medium">
                <span className="text-primary font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-muted-foreground text-xs">
                Upload up to 5 files (max. 10MB each)
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={handleButtonClick}
            >
              <UploadCloudIcon size={16} className="mr-2" />
              Select Files
            </Button>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
          aria-label="Upload files"
        />
      </div>
    </div>
  )
}
