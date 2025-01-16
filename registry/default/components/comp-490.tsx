import { RangeCalendar } from "@/registry/default/ui/calendar-rac";

export default function Component() {
  return (
    <div>
      <RangeCalendar className="rounded-lg border border-border p-2" />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Range calendar - <a className="underline hover:text-foreground" href="https://react-spectrum.adobe.com/react-aria/DateRangePicker.html" target="_blank" rel="noopener nofollow">React Aria</a></p>
    </div>
  );
}
