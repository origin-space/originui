// This is a standalone toast implementation using Radix UI Primitives directly
// For a more opinionated solution, see notification-21.tsx which uses the Toaster component

"use client";

import { Button } from "@/components/ui/button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { CircleCheck, X } from "lucide-react";
import { useRef, useState } from "react";

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
      >
        Custom toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="flex w-full justify-between gap-3">
          <CircleCheck
            className="mt-0.5 shrink-0 text-emerald-500"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <ToastTitle>Your request was completed!</ToastTitle>
              <ToastDescription>
                It demonstrates that the task or request has been processed.
              </ToastDescription>
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
              className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
              aria-label="Close notification"
            >
              <X
                size={16}
                strokeWidth={2}
                className="opacity-60 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </Button>
          </ToastClose>
        </div>
      </Toast>
      <ToastViewport className="sm:left-0 sm:right-auto" />
    </ToastProvider>
  );
}
