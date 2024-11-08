"use client";

import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { subscribe } from "./subscribe-action";
import { cn } from "@/lib/utils";

// Add type for form state
type FormStatus = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  // Combine related state into a single object
  const [formState, setFormState] = useState({
    email: "",
    status: "idle" as FormStatus,
    message: ""
  });

  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, status: "loading", message: "" }));

    try {
      const result = await subscribe(formState.email);
      if (!result.success) {
        setFormState(prev => ({ ...prev, status: "error", message: result.error }));
      } else {
        setFormState({ email: "", status: "success", message: "Thanks for subscribing!" });
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Failed to subscribe"
      }));
    }
  };

  return (
    <div className="relative rounded-xl bg-zinc-900 px-4 py-10 sm:px-8 overflow-hidden dark">
      <div className="absolute -right-64 -top-48 pointer-events-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="856"
          height="745"
          fill="none"
        >
          <g filter="url(#ill-a)" opacity="0.2">
            <path
              fill="url(#ill-b)"
              fillRule="evenodd"
              d="m56 88 344 212-166 188L56 88Z"
              clipRule="evenodd"
            />
          </g>
          <g filter="url(#ill-c)" opacity="0.28">
            <path
              fill="url(#ill-d)"
              fillRule="evenodd"
              d="m424 257 344 212-166 188-178-400Z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <linearGradient
              id="ill-b"
              x1="210.5"
              x2="210.5"
              y1="88"
              y2="467"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.64" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ill-d"
              x1="578.5"
              x2="578.5"
              y1="257"
              y2="636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0.64" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <filter
              id="ill-a"
              width="520"
              height="576"
              x="-32"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_244_5" stdDeviation="44" />
            </filter>
            <filter
              id="ill-c"
              width="520"
              height="576"
              x="336"
              y="169"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_244_5" stdDeviation="44" />
            </filter>
          </defs>
        </svg>
      </div>
      <h2 className="mb-6 text-xl/[1.1] font-extrabold tracking-tight text-foreground md:text-2xl/[1.1]">
        Get notified when new stuff drops.
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="inline-flex gap-2">
            <Input
              id="subscribe-form"
              className="flex-1 md:min-w-64 bg-zinc-700/30 border-zinc-600/65 text-zinc-100 placeholder:text-zinc-500 [&:-webkit-autofill]:bg-zinc-700/30 [&:-webkit-autofill]:[transition:background-color_5000000s_ease-in-out_0s]"
              placeholder="Your email"
              type="email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              disabled={isLoading}
              aria-label="Subscribe to the newsletter"
              required
            />
            <Button
              type="submit"
              className="group relative"
              disabled={isLoading}
              data-loading={isLoading}
            >
              <span className="group-data-[loading=true]:text-transparent">Subscribe <span className="tracking-normal opacity-50 -mr-1">-&gt;</span></span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LoaderCircle className="animate-spin" size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              )}
            </Button>
          </div>
          {formState.message && (
            <p 
              className={cn(
                "mt-2 text-xs",
                formState.status === "error" ? "text-destructive" : "text-muted-foreground"
              )} 
              role="alert" 
              aria-live="polite"
            >
              {formState.message}
            </p>            
          )}
        </div>
      </form>
    </div>
  );
}
