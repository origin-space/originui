// This is a standalone toast implementation using Radix UI Primitives directly
// For a more opinionated solution, see notification-21.tsx which uses the Toaster component

"use client";

import { useState, useRef } from "react";
import { CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastAction,
  ToastViewport,
} from "@/components/ui/toast";

export default function Notification01() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  return (
    <ToastProvider swipeDirection="left">
      <Button
        variant="outline"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >Custom toast</Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="w-full flex justify-between gap-2">
          <CircleCheck className="text-emerald-500 shrink-0 mt-0.5" size={16} strokeWidth={2} aria-hidden="true" />
          <div className="grow flex flex-col gap-3">
            <div className="space-y-1">
              <ToastTitle>Your request was completed!</ToastTitle>
              <ToastDescription>It demonstrates that the task or request has been processed.</ToastDescription>
            </div>
            <div>
              <ToastAction altText="Undo changes" asChild>
                <Button size="sm">Undo changes</Button>
              </ToastAction>
            </div>
          </div>
          <ToastClose asChild>
            <Button
              variant="ghost"
              className="shrink-0 -me-2 -my-1.5 p-0 size-8 group"
              aria-label="Close notification"
            >
              <X size={16} strokeWidth={2} className="opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Button>
          </ToastClose>
        </div>
      </Toast>
      <ToastViewport className="sm:left-0 sm:right-auto" />
    </ToastProvider>
  );
}
