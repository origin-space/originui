"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}


function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    className={cn("border-border border-b last:border-b-0", className)}
    {...props}
  />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all outline-offset-2 focus-visible:outline-2 outline-ring/30 dark:outline-ring/40 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        size={16}
        className="opacity-60 pointer-events-none shrink-0 transition-transform duration-200"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
  <AccordionPrimitive.Content
    data-slot="accordion-content"
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pt-0 pb-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
