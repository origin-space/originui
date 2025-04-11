"use client"

import type React from "react"

import { useState, useRef, useCallback, type ChangeEvent, type DragEvent } from "react"

export type FileWithPreview = {
  file: File
  id: string
  preview: string
}

export type FileUploadOptions = {
  maxFiles?: number // Only used when multiple is true, defaults to Infinity
  maxSize?: number // in bytes
  accept?: string
  multiple?: boolean // Defaults to false
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
  getInputProps: (props?: { disabled?: boolean }) => {
    type: "file"
    className: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    accept: string
    multiple: boolean
    disabled?: boolean
    ref: React.Ref<HTMLInputElement>
  }
}

export const useFileUpload = (options: FileUploadOptions = {}): [FileUploadState, FileUploadActions] => {
  const {
    maxFiles = Infinity,
    maxSize = Infinity,
    accept = "*",
    multiple = false,
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

  const inputRef = useRef<HTMLInputElement>(null)

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

  const createPreview = useCallback(
    (file: File): string => {
      if (file.type.startsWith("image/")) {
        return URL.createObjectURL(file)
      }

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

      return iconPaths.default || "/icons/file.svg"
    },
    [iconPaths],
  )

  const generateUniqueId = useCallback((file: File): string => {
    return `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }, [])

  const clearFiles = useCallback(() => {
    setState((prev) => {
      prev.files.forEach((file) => {
        if (file.file.type.startsWith("image/")) {
          URL.revokeObjectURL(file.preview)
        }
      })

      if (inputRef.current) {
        inputRef.current.value = ""
      }

      return {
        ...prev,
        files: [],
        errors: [],
      }
    })
  }, [])

  const addFiles = useCallback(
    (newFiles: FileList | File[]) => {
      if (!newFiles || newFiles.length === 0) return

      const newFilesArray = Array.from(newFiles)
      const errors: string[] = []

      // Clear existing errors when new files are uploaded
      setState((prev) => ({ ...prev, errors: [] }))

      // In single file mode, clear existing files first
      if (!multiple) {
        clearFiles()
      }

      // Check if adding these files would exceed maxFiles (only in multiple mode)
      if (multiple && maxFiles !== Infinity && state.files.length + newFilesArray.length > maxFiles) {
        errors.push(`You can only upload a maximum of ${maxFiles} files.`)
        setState((prev) => ({ ...prev, errors }))
        return
      }

      const validFiles: FileWithPreview[] = []

      newFilesArray.forEach((file) => {
        // Check for duplicates
        const isDuplicate = state.files.some(
          (existingFile) =>
            existingFile.file.name === file.name && 
            existingFile.file.size === file.size
        )

        // Skip duplicate files silently
        if (isDuplicate) {
          return
        }

        // Check file size
        if (file.size > maxSize) {
          errors.push(`Some files exceed the maximum size of ${formatBytes(maxSize)}.`)
          return
        }

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

      // Only update state if we have valid files to add
      if (validFiles.length > 0) {
        setState((prev) => {
          // In single file mode, replace existing files
          if (!multiple) {
            // Clean up old file previews
            prev.files.forEach((file) => {
              if (file.file.type.startsWith("image/")) {
                URL.revokeObjectURL(file.preview)
              }
            })
            return {
              ...prev,
              files: validFiles,
              errors,
            }
          }

          // In multiple file mode, append new files
          return {
            ...prev,
            files: [...prev.files, ...validFiles],
            errors,
          }
        })
      } else if (errors.length > 0) {
        // If we have errors but no valid files, update the state with errors
        setState((prev) => ({
          ...prev,
          errors,
        }))
      }

      // Reset input value after handling files
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    },
    [state.files.length, maxFiles, multiple, maxSize, validateFile, createPreview, generateUniqueId, clearFiles],
  )

  const removeFile = useCallback((id: string) => {
    setState((prev) => {
      const fileToRemove = prev.files.find((file) => file.id === id)
      if (fileToRemove) {
        if (fileToRemove.file.type.startsWith("image/")) {
          URL.revokeObjectURL(fileToRemove.preview)
        }
      }

      return {
        ...prev,
        files: prev.files.filter((file) => file.id !== id),
        errors: [], // Clear errors when a file is removed
      }
    })
  }, [])

  const clearErrors = useCallback(() => {
    setState((prev) => ({
      ...prev,
      errors: [],
    }))
  }, [])

  const handleDragEnter = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setState((prev) => ({ ...prev, isDragging: true }))
  }, [])

  const handleDragLeave = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()

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
        // In single file mode, only use the first file
        if (!multiple) {
          const file = e.dataTransfer.files[0]
          addFiles([file])
        } else {
          addFiles(e.dataTransfer.files)
        }
      }
    },
    [addFiles, multiple],
  )

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files)
      }
    },
    [addFiles],
  )

  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }, [])

  const getInputProps = useCallback(
    (props: { disabled?: boolean } = {}) => {
      return {
        type: "file" as const,
        className: "sr-only",
        onChange: handleFileChange,
        accept,
        multiple,
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
