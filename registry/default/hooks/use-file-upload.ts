"use client"

import type React from "react"

import { useState, useRef, useCallback, type ChangeEvent, type DragEvent } from "react"

export type FileWithPreview = {
  file: File
  id: string
  preview: string
}

export type FileUploadOptions = {
  maxFiles?: number
  maxSize?: number // in bytes
  accept?: string
  multiple?: boolean
  iconPaths?: {
    pdf?: string
    zip?: string
    doc?: string
    xls?: string
    video?: string
    audio?: string
    default?: string
  }
}

export type FileUploadState = {
  files: FileWithPreview[]
  isDragging: boolean
  errors: string[]
}

export type FileUploadActions = {
  addFiles: (files: FileList | File[]) => void
  removeFile: (id: string) => void
  clearFiles: () => void
  clearErrors: () => void
  handleDragEnter: (e: DragEvent<HTMLElement>) => void
  handleDragLeave: (e: DragEvent<HTMLElement>) => void
  handleDragOver: (e: DragEvent<HTMLElement>) => void
  handleDrop: (e: DragEvent<HTMLElement>) => void
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  openFileDialog: () => void
  getInputProps: (props?: { disabled?: boolean; multiple?: boolean }) => {
    type: "file"
    className: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    accept: string
    multiple?: boolean
    disabled?: boolean
    ref: React.Ref<HTMLInputElement>
  }
}

export const useFileUpload = (options: FileUploadOptions = {}): [FileUploadState, FileUploadActions] => {
  const {
    maxFiles = Number.POSITIVE_INFINITY,
    maxSize = 10 * 1024 * 1024, // 10MB default
    accept = "*",
    multiple = true,
    iconPaths = {
      pdf: "/icons/pdf.svg",
      zip: "/icons/zip.svg",
      doc: "/icons/doc.svg",
      xls: "/icons/xls.svg",
      video: "/icons/video.svg",
      audio: "/icons/audio.svg",
      default: "/icons/file.svg",
    },
  } = options

  const [state, setState] = useState<FileUploadState>({
    files: [],
    isDragging: false,
    errors: [],
  })

  // Use useRef for the input element
  const inputRef = useRef<HTMLInputElement>(null)

  // Memoize the validateFile function to avoid recreating it on every render
  const validateFile = useCallback(
    (file: File): string | null => {
      if (file.size > maxSize) {
        return `File "${file.name}" exceeds the maximum size of ${formatBytes(maxSize)}.`
      }

      if (accept !== "*") {
        const acceptedTypes = accept.split(",").map((type) => type.trim())
        const fileType = file.type || ""
        const fileExtension = `.${file.name.split(".").pop()}`

        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith(".")) {
            return fileExtension.toLowerCase() === type.toLowerCase()
          }
          if (type.endsWith("/*")) {
            const baseType = type.split("/")[0]
            return fileType.startsWith(`${baseType}/`)
          }
          return fileType === type
        })

        if (!isAccepted) {
          return `File "${file.name}" is not an accepted file type.`
        }
      }

      return null
    },
    [accept, maxSize],
  )

  // Memoize the createPreview function
  const createPreview = useCallback(
    (file: File): string => {
      if (file.type.startsWith("image/")) {
        return URL.createObjectURL(file)
      }

      // Return appropriate icon based on file type
      if (file.type.includes("pdf")) {
        return iconPaths.pdf || "/icons/pdf.svg"
      } else if (file.type.includes("zip") || file.type.includes("archive")) {
        return iconPaths.zip || "/icons/zip.svg"
      } else if (file.type.includes("word") || file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
        return iconPaths.doc || "/icons/doc.svg"
      } else if (file.type.includes("excel") || file.name.endsWith(".xls") || file.name.endsWith(".xlsx")) {
        return iconPaths.xls || "/icons/xls.svg"
      } else if (file.type.includes("video/")) {
        return iconPaths.video || "/icons/video.svg"
      } else if (file.type.includes("audio/")) {
        return iconPaths.audio || "/icons/audio.svg"
      }

      // Default file icon
      return iconPaths.default || "/icons/file.svg"
    },
    [iconPaths],
  )

  // Generate a more robust ID
  const generateUniqueId = useCallback((file: File): string => {
    return `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }, [])

  // Memoize the addFiles function
  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      if (!newFiles || newFiles.length === 0) return

      const newFilesArray = Array.from(newFiles)
      const errors: string[] = []

      // Check if adding these files would exceed maxFiles
      if (state.files.length + newFilesArray.length > maxFiles) {
        errors.push(`You can only upload a maximum of ${maxFiles} files.`)
        setState((prev) => ({ ...prev, errors }))
        return
      }

      const validFiles: FileWithPreview[] = []

      newFilesArray.forEach((file) => {
        const error = validateFile(file)
        if (error) {
          errors.push(error)
        } else {
          validFiles.push({
            file,
            id: generateUniqueId(file),
            preview: createPreview(file),
          })
        }
      })

      setState((prev) => ({
        ...prev,
        files: [...prev.files, ...validFiles],
        errors: [...prev.errors, ...errors],
      }))
    },
    [state.files.length, maxFiles, validateFile, createPreview, generateUniqueId],
  )

  // Memoize the removeFile function
  const removeFile = useCallback((id: string) => {
    setState((prev) => {
      const updatedFiles = prev.files.filter((file) => file.id !== id)

      // Revoke object URL to avoid memory leaks
      const fileToRemove = prev.files.find((file) => file.id === id)
      if (fileToRemove && fileToRemove.file.type.startsWith("image/")) {
        URL.revokeObjectURL(fileToRemove.preview)
      }

      return {
        ...prev,
        files: updatedFiles,
      }
    })
  }, [])

  // Memoize the clearFiles function
  const clearFiles = useCallback(() => {
    setState((prev) => {
      // Revoke all object URLs
      prev.files.forEach((file) => {
        if (file.file.type.startsWith("image/")) {
          URL.revokeObjectURL(file.preview)
        }
      })

      return {
        ...prev,
        files: [],
        errors: [],
      }
    })
  }, [])

  // Add a dedicated clearErrors function
  const clearErrors = useCallback(() => {
    setState((prev) => ({
      ...prev,
      errors: [],
    }))
  }, [])

  // Memoize the drag event handlers
  const handleDragEnter = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setState((prev) => ({ ...prev, isDragging: true }))
  }, [])

  const handleDragLeave = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

    // Only set isDragging to false if we're leaving the drop zone
    // and not entering a child element
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return
    }

    setState((prev) => ({ ...prev, isDragging: false }))
  }, [])

  const handleDragOver = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(
    (e: DragEvent<HTMLElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setState((prev) => ({ ...prev, isDragging: false }))

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files)
      }
    },
    [addFiles],
  )

  // Memoize the file change handler
  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files)
      }
    },
    [addFiles],
  )

  // Memoize the openFileDialog function
  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }, [])

  // Memoize the getInputProps function
  const getInputProps = useCallback(
    (props: { disabled?: boolean; multiple?: boolean } = {}) => {
      return {
        type: "file" as const,
        className: "sr-only",
        onChange: handleFileChange,
        accept,
        multiple: props.multiple !== undefined ? props.multiple : multiple,
        disabled: props.disabled,
        ref: inputRef,
      }
    },
    [accept, multiple, handleFileChange],
  )

  return [
    state,
    {
      addFiles,
      removeFile,
      clearFiles,
      clearErrors,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      handleFileChange,
      openFileDialog,
      getInputProps,
    },
  ]
}

// Helper function to format bytes to human-readable format
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}
