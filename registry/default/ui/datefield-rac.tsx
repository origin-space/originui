"use client";

import { cn } from "@/registry/default/lib/utils";
import {
  DateFieldProps,
  DateField as DateFieldRac,
  DateInputProps as DateInputPropsRac,
  DateInput as DateInputRac,
  DateSegmentProps,
  DateSegment as DateSegmentRac,
  DateValue as DateValueRac,
  TimeFieldProps,
  TimeField as TimeFieldRac,
  TimeValue as TimeValueRac,
  composeRenderProps,
} from "react-aria-components";

const DateField = <T extends DateValueRac>({
  className,
  children,
  ...props
}: DateFieldProps<T>) => {
  return (
    <DateFieldRac
      className={composeRenderProps(className, (className) => cn("space-y-2", className))}
      {...props}
    >
      {children}
    </DateFieldRac>
  );
};

const TimeField = <T extends TimeValueRac>({
  className,
  children,
  ...props
}: TimeFieldProps<T>) => {
  return (
    <TimeFieldRac
      className={composeRenderProps(className, (className) => cn("space-y-2", className))}
      {...props}
    >
      {children}
    </TimeFieldRac>
  );
};

const DateSegment = ({ className, ...props }: DateSegmentProps) => {
  return (
    <DateSegmentRac
      className={composeRenderProps(className, (className) =>
        cn(
          "inline rounded p-0.5 text-foreground caret-transparent outline outline-0 data-[disabled]:cursor-not-allowed data-[focused]:bg-accent data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[focused]:data-[placeholder]:text-foreground data-[focused]:text-foreground data-[invalid]:data-[focused]:data-[placeholder]:text-destructive-foreground data-[invalid]:data-[focused]:text-destructive-foreground data-[invalid]:data-[placeholder]:text-destructive data-[invalid]:text-destructive data-[placeholder]:text-muted-foreground/70 data-[type=literal]:text-muted-foreground/70 data-[disabled]:opacity-50",
          className,
        ),
      )}
      {...props}
    />
  );
};

const dateInputStyle =
  "relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20";

interface DateInputProps extends DateInputPropsRac {
  className?: string;
  unstyled?: boolean;
}

const DateInput = ({ className, unstyled = false, ...props }: Omit<DateInputProps, "children">) => {
  return (
    <DateInputRac
      className={composeRenderProps(className, (className) =>
        cn(!unstyled && dateInputStyle, className),
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} />}
    </DateInputRac>
  );
};

export { DateField, DateInput, DateSegment, TimeField, dateInputStyle };
export type { DateInputProps };
