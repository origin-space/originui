"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export default function Component() {
  return (
    <NumberField defaultValue={2048} minValue={0}>
      <div className="*:not-first:mt-2">
        <Label className="text-foreground text-sm font-medium">
          Number input with plus/minus buttons
        </Label>
        <Group className="border-input data-focus-within:border-ring/40 data-focus-within:ring-ring/8 dark:data-focus-within:ring-ring/12 data-focus-within:has-data-invalid:border-destructive/60 data-focus-within:has-data-invalid:ring-destructive/20 dark:data-focus-within:has-data-invalid:ring-destructive/25 relative inline-flex h-9 w-full items-center overflow-hidden rounded-lg border text-sm whitespace-nowrap shadow-xs transition-shadow data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:outline-hidden">
          <Button
            slot="decrement"
            className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <MinusIcon size={16} aria-hidden="true" />
          </Button>
          <Input className="bg-background text-foreground w-full grow px-3 py-2 text-center tabular-nums focus:outline-hidden" />
          <Button
            slot="increment"
            className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PlusIcon size={16} aria-hidden="true" />
          </Button>
        </Group>
      </div>
      <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="hover:text-foreground underline"
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
