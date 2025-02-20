"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";

export default function Component() {
  return (
    <NumberField
      defaultValue={99}
      formatOptions={{
        style: "currency",
        currency: "EUR",
        currencySign: "accounting",
      }}
    >
      <div className="*:not-first:mt-2">
        <Label className="text-foreground text-sm font-medium">Number input with chevrons</Label>
        <Group className="border-input data-focus-within:border-ring/40 data-focus-within:ring-ring/8 dark:data-focus-within:ring-ring/12 data-focus-within:has-data-invalid:border-destructive/60 data-focus-within:has-data-invalid:ring-destructive/20 dark:data-focus-within:has-data-invalid:ring-destructive/25 relative inline-flex h-9 w-full items-center overflow-hidden rounded-lg border text-sm whitespace-nowrap shadow-xs transition-shadow data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:outline-hidden">
          <Input className="bg-background text-foreground flex-1 px-3 py-2 tabular-nums focus:outline-hidden" />
          <div className="flex h-[calc(100%+2px)] flex-col">
            <Button
              slot="increment"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronUpIcon size={12} aria-hidden="true" />
            </Button>
            <Button
              slot="decrement"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronDownIcon size={12} aria-hidden="true" />
            </Button>
          </div>
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
