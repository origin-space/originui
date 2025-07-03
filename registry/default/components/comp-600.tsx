"use client"

import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ImageIcon, UploadIcon, XIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod/v4"

import { useFileUpload } from "@/registry/default/hooks/use-file-upload"
import { Button } from "@/registry/default/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"

const maxSizeMB = 2
const maxSize = maxSizeMB * 1024 * 1024 // 2MB default
const imageTypes = "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif"

const formSchema = z.object({
  image: z
    .file()
    .max(maxSize, { error: `Image can only be max size of ${maxSizeMB}MB` })
    .mime(imageTypes.split(","))
    .nullable(),
})

export default function Component() {
  const [
    { files, isDragging },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({ accept: imageTypes })

  const previewUrl = files[0]?.preview || null

  useEffect(() => {
    const imageFile = files[0] ? files[0].file : null
    form.setValue("image", imageFile as File)
  }, [files])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      image: null,
    },
  })

  function onSubmit({ image }: z.infer<typeof formSchema>) {
    image
      ? toast(`You submitted the image of name "${image.name}"`)
      : toast("You did not sumbit the form with value `null`")
  }

  return (
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          <FormField
            name="image"
            control={form.control}
            render={({ field: { name, value } }) => (
              <FormItem>
                <FormLabel>Avatar</FormLabel>
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  data-dragging={isDragging || undefined}
                  className="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-[input:focus]:ring-[3px]"
                >
                  <FormControl>
                    <input
                      name={name}
                      className="sr-only"
                      {...getInputProps()}
                    />
                  </FormControl>
                  {previewUrl ? (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img
                        src={previewUrl}
                        alt={files[0]?.file?.name || "Uploaded image"}
                        className="mx-auto max-h-full rounded object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
                      <div
                        className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                        aria-hidden="true"
                      >
                        <ImageIcon className="size-4 opacity-60" />
                      </div>
                      <p className="mb-1.5 text-sm font-medium">
                        Drop your image here
                      </p>
                      <p className="text-muted-foreground text-xs">
                        SVG, PNG, JPG or GIF (max. {maxSizeMB}MB)
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-4"
                        onClick={openFileDialog}
                      >
                        <UploadIcon
                          className="-ms-1 size-4 opacity-60"
                          aria-hidden="true"
                        />
                        Select image
                      </Button>
                    </div>
                  )}

                  {previewUrl && (
                    <div className="absolute top-4 right-4">
                      <button
                        type="button"
                        className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                        onClick={() => {
                          removeFile(files[0]?.id)
                          form.setValue("image", null)
                          form.clearErrors("image")
                        }}
                        aria-label="Remove image"
                      >
                        <XIcon className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-1">
                    <FormMessage className="text-xs" />
                  </div>
                  <Button type="submit" size="sm" variant="outline">
                    Submit
                  </Button>
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-center text-xs"
      >
        Image uploader with shadcn form ∙ (by{" "}
        <a
          href="https://github.com/alihamasdev"
          className="hover:text-foreground underline"
        >
          Ali Hamas
        </a>
        )
      </p>
    </div>
  )
}
