"use client";

import { cn } from "@/registry/default/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

// Components
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: number;
  orientation?: "horizontal" | "vertical";
}

function Timeline({
  step = 1,
  orientation = "vertical",
  className,
  ...props
}: TimelineProps) {
  return (
    <div
      data-slot="timeline"
      className={cn(
        "group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
        className
      )}
      data-orientation={orientation}
      style={{
        "--timeline-step": step,
      } as React.CSSProperties}
      {...props}
    />
  );
}

// TimelineContent
function TimelineContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="timeline-content"
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

// TimelineDate
interface TimelineDateProps extends React.HTMLAttributes<HTMLTimeElement> {
  asChild?: boolean;
}

function TimelineDate({ asChild = false, className, ...props }: TimelineDateProps) {
  const Comp = asChild ? Slot : "time";

  return (
    <Comp
      data-slot="timeline-date"
      className={cn("block text-xs font-medium text-muted-foreground group-data-[orientation=vertical]/timeline:sm:text-right group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:max-sm:h-4 group-data-[orientation=vertical]/timeline:max-sm:mb-2 group-data-[orientation=horizontal]/timeline:mb-2", className)}
      {...props}
    />
  );
}

// TimelineHeader
function TimelineHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="timeline-header" className={cn(className)} {...props} />
  );
}

// TimelineIndicator
interface TimelineIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

function TimelineIndicator({
  asChild = false,
  className,
  children,
  ...props
}: TimelineIndicatorProps) {
  return (
    <div
      data-slot="timeline-indicator"
      className={cn(
        "absolute group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-0 size-4 bg-muted group-data-completed/timeline-item:bg-transparent group-data-completed/timeline-item:border-2 group-data-completed/timeline-item:border-primary rounded-full group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=horizontal]/timeline:-translate-y-1/2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// TimelineItem
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  completed?: boolean;
}

function TimelineItem({
  completed = false,
  className,
  ...props
}: TimelineItemProps) {
  return (
    <div
      data-slot="timeline-item"
      className={cn(
        "flex-1 group/timeline-item relative group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=vertical]/timeline:sm:ms-32 flex flex-col gap-0.5 group-data-[orientation=vertical]/timeline:not-last:pb-12 group-data-[orientation=horizontal]/timeline:not-last:pe-8 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-primary",
        className
      )}
      data-completed={completed || undefined}
      {...props}
    />
  );
}

// TimelineSeparator
function TimelineSeparator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="timeline-separator"
      className={cn(
        "absolute group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:h-0.5 bg-muted self-start group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:translate-y-4.5 group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-last/timeline-item:hidden",
        className
      )}
      {...props}
    />
  );
}

// TimelineTitle
function TimelineTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="timeline-title"
      className={cn("text-sm font-medium sm:-mt-0.5", className)}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
}; 