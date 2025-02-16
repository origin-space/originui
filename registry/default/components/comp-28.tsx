"use client";

import { Minus, Plus } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export default function Component() {
  return (
    <NumberField defaultValue={2048} minValue={0}>
      <div className="*:not-first:mt-2">
        <Label className="text-sm font-medium text-foreground">
          Number input with plus/minus buttons
        </Label>
        <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-xs transition-shadow data-focus-within:border-ring/40 data-disabled:opacity-50 data-focus-within:outline-hidden data-focus-within:ring-[3px] data-focus-within:ring-ring/8 dark:data-focus-within:ring-ring/12 data-focus-within:has-data-invalid:border-destructive/60 data-focus-within:has-data-invalid:ring-destructive/20 dark:data-focus-within:has-data-invalid:ring-destructive/25">
          <Button
            slot="decrement"
            className="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
          >
            <Minus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
          <Input className="w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-hidden" />
          <Button
            slot="increment"
            className="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
          >
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </Group>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="underline hover:text-foreground"
          href="https://react-spectrum.adobe.com/react-aria/DateField.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </NumberField>
  );
}
