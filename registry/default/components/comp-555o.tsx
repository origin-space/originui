"use client"

import type React from "react"
import { useState } from "react"
import { formatBytes } from "@/registry/default/hooks/use-file-upload"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minimize2,
  File,
  FileImage,
  FileIcon as FilePdf,
  FileArchive,
  FileAudio,
  FileVideo,
} from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/registry/default/ui/dialog"

export interface ThumbnailFile {
  id: string
  name: string
  size: number
  type: string
  url: string
  preview?: string
}

export default function Component() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  // Sample files data - in a real app, this would come from a database or API
  const files: ThumbnailFile[] = [
    {
      id: "1",
      name: "document.pdf",
      size: 2500000,
      type: "application/pdf",
      url: "#",
    },
    {
      id: "2",
      name: "image.jpg",
      size: 1200000,
      type: "image/jpeg",
      url: "/placeholder.svg?height=400&width=400",
      preview: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "3",
      name: "archive.zip",
      size: 5600000,
      type: "application/zip",
      url: "#",
    },
  ]

  const currentFile = files[currentIndex]
  const thumbnailSize = "md"

  const thumbnailSizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? files.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === files.length - 1 ? 0 : prev + 1))
  }

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFullscreen((prev) => !prev)
  }

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // In a real app, you would trigger a download
    console.log(`Downloading file: ${currentFile.name}`)
    alert(`Downloading ${currentFile.name}`)
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return <FileImage className="w-12 h-12 text-blue-500" />
    } else if (fileType.includes("pdf")) {
      return <FilePdf className="w-12 h-12 text-red-500" />
    } else if (fileType.includes("zip") || fileType.includes("archive")) {
      return <FileArchive className="w-12 h-12 text-yellow-500" />
    } else if (fileType.includes("audio")) {
      return <FileAudio className="w-12 h-12 text-purple-500" />
    } else if (fileType.includes("video")) {
      return <FileVideo className="w-12 h-12 text-pink-500" />
    }

    return <File className="w-12 h-12 text-gray-400" />
  }

  const PreviewContent = () => {
    if (!currentFile) return null

    return (
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${fullscreen ? "fixed inset-0 z-50" : ""}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium text-gray-700 truncate">{currentFile.name}</h3>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleDownload}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors rounded-full"
              aria-label="Download file"
            >
              <Download className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors rounded-full"
              aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {fullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            className={`flex items-center justify-center bg-gray-100 ${
              fullscreen ? "h-[calc(100vh-10rem)]" : "h-[400px]"
            }`}
          >
            {currentFile.type.startsWith("image/") ? (
              <img
                src={currentFile.preview || currentFile.url}
                alt={currentFile.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                {getFileIcon(currentFile.type)}
                <p className="mt-4 text-sm text-gray-500">Preview not available for this file type</p>
                <p className="mt-2 text-xs text-gray-400">{formatBytes(currentFile.size)}</p>
              </div>
            )}
          </div>

          {files.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors"
                aria-label="Previous file"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors"
                aria-label="Next file"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {files.length > 1 && (
          <div className="p-4 border-t overflow-x-auto">
            <div className="flex space-x-2">
              {files.map((file, index) => (
                <button
                  key={file.id}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`
                    ${thumbnailSizeClasses[thumbnailSize]}
                    rounded-md overflow-hidden border-2 transition-all
                    ${currentIndex === index ? "border-primary" : "border-transparent hover:border-gray-300"}
                    flex items-center justify-center bg-gray-100
                  `}
                >
                  {file.type.startsWith("image/") && (file.preview || file.url) ? (
                    <img src={file.preview || file.url} alt={file.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center">
                      {file.type.startsWith("image/") ? (
                        <FileImage className="w-6 h-6 text-blue-500" />
                      ) : (
                        <File className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 border-t">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{formatBytes(currentFile.size)}</span>
            <span>
              {currentIndex + 1} of {files.length}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Open Preview
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl p-0 border-none bg-transparent shadow-none">
        <PreviewContent />
      </DialogContent>
    </Dialog>
  )
}
