"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"

import { cn } from "@/registry/default/lib/utils"

const ToastProvider = ToastPrimitives.Provider

function ToastViewport({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>) {
  return (
    <ToastPrimitives.Viewport
      className={cn(
        "fixed top-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:flex-col md:max-w-[400px]",
        className
      )}
      {...props}
    />
  )
}

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:data-[swipe-direction=left]:slide-out-to-left-full data-[state=closed]:data-[swipe-direction=right]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Toast({
  className,
  variant,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
  VariantProps<typeof toastVariants>) {
  return (
    <ToastPrimitives.Root
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
}

function ToastAction({
  className,
  asChild = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>) {
  return (
    <ToastPrimitives.Action
      className={cn(
        !asChild &&
          "hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive focus:group-[.destructive]:ring-destructive focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-[color,box-shadow] outline-none hover:group-[.destructive]:text-white focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      asChild={asChild}
      {...props}
    >
      {props.children}
    </ToastPrimitives.Action>
  )
}

function ToastClose({
  className,
  asChild = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>) {
  return (
    <ToastPrimitives.Close
      className={cn(
        !asChild &&
          "group focus-visible:border-ring focus-visible:ring-ring/50 absolute top-3 right-3 flex size-7 items-center justify-center rounded transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none",
        className
      )}
      toast-close=""
      asChild={asChild}
      {...props}
    >
      {asChild ? (
        props.children
      ) : (
        <XIcon
          size={16}
          className="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </ToastPrimitives.Close>
  )
}

function ToastTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>) {
  return (
    <ToastPrimitives.Title
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>) {
  return (
    <ToastPrimitives.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type ToastProps,
}
