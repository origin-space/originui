// Dependencies: pnpm install input-otp lucide-react

"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import { Minus } from "lucide-react";

export default function Input45() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-45">OTP input double</Label>
      <OTPInput
        id="input-45"
        containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
        maxLength={6}
        render={({ slots }) => (
          <>
            <div className="flex">
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>

            <div className="text-muted-foreground/80">
              <Minus size={16} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="flex">
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          </>
        )}
      />
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://github.com/guilhermerodz/input-otp"
          target="_blank"
          rel="noopener nofollow"
        >
          Input OTP
        </a>
      </p>
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative flex size-9 items-center justify-center border-y border-e border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 ring-offset-background transition-all first:rounded-s-lg first:border-s last:rounded-e-lg",
        { "z-10 border border-ring ring-2 ring-ring/30 ring-offset-2": props.isActive },
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
