"use client";

import { cn } from "@/registry/default/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { RiNavigationLine, RiLoader3Line } from "@remixicon/react";
import { useId, useState } from "react";
import { subscribe } from "./subscribe-action";

// Add type for form state
type FormStatus = "idle" | "loading" | "success" | "error";

function Form() {
  const id = useId();
  const [formState, setFormState] = useState({
    email: "",
    status: "idle" as FormStatus,
    message: "",
  });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, status: "loading", message: "" }));

    try {
      const result = await subscribe(formState.email);
      if (!result.success) {
        setFormState((prev) => ({ ...prev, status: "error", message: result.error }));
      } else {
        setFormState({ email: "", status: "success", message: "Thanks for subscribing!" });
      }
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <div className="inline-flex gap-2">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50">
              <RiNavigationLine size={16} className="-scale-x-100" aria-hidden="true" />
            </div>
            <Input
              id={id}
              className="ps-9 h-10 flex-1 md:min-w-64 [&:-webkit-autofill]:[transition:background-color_5000000s_ease-in-out_0s] border-zinc-600/65 bg-zinc-700/30 text-zinc-100 placeholder:text-zinc-500 [&:-webkit-autofill]:bg-zinc-700/30 [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] rounded-full"
              placeholder="Enter your email..."
              type="email"
              value={formState.email}
              onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
              disabled={isLoading}
              aria-label="Subscribe to the newsletter"
              required
            />
          </div>
          <Button
            type="submit"
            className="group relative rounded-full h-10"
            disabled={isLoading}
            data-loading={isLoading}
          >
            <span className="group-data-[loading=true]:text-transparent">
              Subscribe
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <RiLoader3Line
                  className="animate-spin"
                  size={16}
                  aria-hidden="true"
                />
              </div>
            )}
          </Button>
        </div>
        {formState.message && (
          <p
            className={cn(
              "mt-2 text-xs absolute",
              formState.status === "error" ? "text-destructive" : "text-muted-foreground",
            )}
            role="alert"
            aria-live="polite"
          >
            {formState.message}
          </p>
        )}
      </div>
    </form>
  );
}

export function SubscribeBottom() {
  return (
    <div className="dark relative overflow-hidden rounded-xl bg-zinc-900 px-4 py-14 sm:px-8">
      <Illustration className="absolute top-0 left-0 -translate-x-1/2" aria-hidden="true" />
      <Illustration className="absolute right-0 bottom-0 translate-x-1/4" aria-hidden="true" />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <h2 className="font-heading text-2xl/[1.1] font-bold tracking-tight text-foreground md:text-3xl/[1.1]">
          Get notified when new stuff drops.
        </h2>
        <Form />
      </div>
    </div>
  );
}

function Illustration({
  className,
}: {
  className?: string;
}) {
  const id = useId();
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="267"
      height="268"
      fill="none"
      aria-hidden="true"
    >
      <g filter={`url(#${id}a)`} style={{ mixBlendMode: "plus-lighter" }}>
        <path
          fill="#fff"
          fillOpacity=".48"
          d="M189 76.284 242.642 24 189 83.753v19.691l-8.148-6.11L24 244 176.099 89.864v-13.58H189Z"
        />
      </g>
      <defs>
        <filter
          id={`${id}a`}
          width="266.642"
          height="268"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_809_24" stdDeviation="12" />
        </filter>
      </defs>
    </svg>
  );
}