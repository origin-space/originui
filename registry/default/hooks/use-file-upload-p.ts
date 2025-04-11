"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export interface FileInfo {
  id: string
  name: string
  size: number
  type: string
  url: string
}

interface UseFileUploadProps {
  // Allow multiple file selection
  multiple?: boolean

  // File types to accept (e.g., "image/*", ".pdf,.docx")
  accept?: string

  // Maximum number of files when multiple is true
  maxFiles?: number

  // Maximum file size in bytes
  maxSize?: number

  // Callback when files are uploaded
  onUpload?: (files: FileInfo[] | FileInfo) => void

  // Callback when files are removed
  onRemove?: (fileId?: string) => void
}

/**
 * A hook for handling file uploads in React components.
 * Supports both single and multiple file uploads with preview capabilities.
 */
export function useFileUpload({
  multiple = false,
  accept = "*/*",
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024, // 10MB default
  onUpload,
  onRemove,
}: UseFileUploadProps = {}) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileInfo[]>([])
  const urlsRef = useRef<string[]>([])

  /**
   * Trigger file input click to open file selection dialog
   */
  const handleFileInputClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  /**
   * Format file size in human-readable format
   */
  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }, [])

  /**
   * Handle file selection from input
   */
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files
      if (!selectedFiles || selectedFiles.length === 0) return

      const newFiles: FileInfo[] = []
      const newUrls: string[] = []

      // Limit number of files if multiple is true
      const filesToProcess = multiple
        ? Array.from(selectedFiles).slice(0, maxFiles - files.length)
        : [selectedFiles[0]]

      filesToProcess.forEach((file) => {
        // Skip files that exceed max size
        if (file.size > maxSize) return

        const url = URL.createObjectURL(file)
        newUrls.push(url)

        newFiles.push({
          id: crypto.randomUUID(),
          name: file.name,
          size: file.size,
          type: file.type,
          url,
        })
      })

      if (multiple) {
        setFiles((prev) => [...prev, ...newFiles])
      } else {
        // If single file mode, replace existing file
        clearFiles()
        setFiles(newFiles)
      }

      urlsRef.current = [...urlsRef.current, ...newUrls]

      // Call onUpload with appropriate format based on multiple flag
      if (onUpload) {
        if (multiple) {
          onUpload(newFiles)
        } else {
          onUpload(newFiles[0])
        }
      }
    },
    [maxFiles, maxSize, multiple, files, onUpload]
  )

  /**
   * Remove a specific file by ID
   * If no ID is provided, removes the first file (for single file uploads)
   */
  const removeFile = useCallback(
    (fileId?: string) => {
      const idToRemove = fileId || files[0]?.id
      if (!idToRemove) return

      const fileToRemove = files.find((f) => f.id === idToRemove)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url)
        urlsRef.current = urlsRef.current.filter((url) => url !== fileToRemove.url)
        setFiles((prev) => prev.filter((f) => f.id !== idToRemove))
        onRemove?.(idToRemove)
      }
    },
    [files, onRemove]
  )

  /**
   * Clear all files
   */
  const clearFiles = useCallback(() => {
    // Revoke all object URLs to prevent memory leaks
    urlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    urlsRef.current = []
    setFiles([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onRemove?.()
  }, [onRemove])

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      urlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [])

  // Get the first file for single file mode
  const firstFile = files[0] || null

  return {
    // File data
    files,
    file: firstFile,
    fileName: firstFile?.name || null,
    fileUrl: firstFile?.url || null,
    previewUrl: firstFile?.url || null, // Alias for fileUrl for backward compatibility
    isEmpty: files.length === 0,

    // Refs
    fileInputRef,

    // Actions
    handleFileInputClick,
    handleThumbnailClick: handleFileInputClick, // Alias for handleFileInputClick
    handleButtonClick: handleFileInputClick, // Alias for handleFileInputClick
    handleFileChange,
    removeFile,
    handleRemove: removeFile, // Alias for removeFile
    clearFiles,
    handleRemoveAll: clearFiles, // Alias for clearFiles

    // Utilities
    formatFileSize,
  }
}
