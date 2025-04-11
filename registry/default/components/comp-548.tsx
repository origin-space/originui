"use client"

import { useCallback, useState } from "react"
import {
  FileIcon,
  FileTextIcon,
  FileImageIcon,
  FileArchiveIcon,
  FileSpreadsheetIcon,
  DownloadIcon,
  TrashIcon,
  UploadCloudIcon,
} from "lucide-react"

import { FileInfo, useFileUpload } from "@/registry/default/hooks/use-file-upload-p"
import { Button } from "@/registry/default/ui/button"

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
    maxFiles: 10,
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

  return (
    <div className="w-full max-w-2xl">
      {files.length > 0 ? (
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">Files ({files.length})</h3>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleButtonClick}
                className="text-xs h-8"
                disabled={files.length >= 10}
              >
                <UploadCloudIcon size={14} className="mr-1" />
                Add files
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRemoveAll}
                className="text-xs h-8 text-red-500 hover:text-red-600"
              >
                <TrashIcon size={14} className="mr-1" />
                Remove all
              </Button>
            </div>
          </div>
          
          <div className="border-input rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-xs font-medium text-left p-3">Name</th>
                  <th className="text-xs font-medium text-left p-3">Type</th>
                  <th className="text-xs font-medium text-left p-3">Size</th>
                  <th className="text-xs font-medium text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {files.map((file) => (
                  <tr key={file.id} className="bg-card hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {getFileIcon(file)}
                        <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-muted-foreground text-sm">
                      {file.type.split('/')[1]?.toUpperCase() || 'UNKNOWN'}
                    </td>
                    <td className="p-3 text-muted-foreground text-sm">
                      {formatFileSize(file.size)}
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-8 text-muted-foreground hover:text-foreground"
                          aria-label={`Download ${file.name}`}
                          onClick={() => window.open(file.url, '_blank')}
                        >
                          <DownloadIcon size={16} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-8 text-muted-foreground hover:text-red-500"
                          aria-label={`Remove ${file.name}`}
                          onClick={() => handleRemove(file.id)}
                        >
                          <TrashIcon size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div 
          className={`border-input bg-background relative flex min-h-[180px] w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-4 transition-colors ${
            isDragging ? "border-primary bg-primary/5" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
            <UploadCloudIcon size={24} />
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-sm font-medium">
              <span className="text-primary font-medium">Click to upload</span> or drag and drop
            </p>
            <p className="text-muted-foreground text-xs">
              Upload up to 10 files (max. 10MB each)
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
        </div>
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
  )
}
