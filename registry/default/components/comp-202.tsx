import { SelectNative } from "@/registry/default/ui/select-native";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="relative rounded-lg border border-input bg-background shadow-xs transition-shadow focus-within:border-ring/40 focus-within:outline-hidden focus-within:ring-[3px] ring-ring/8 dark:ring-ring/12 has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 has-[select:is(:disabled)_*]:pointer-events-none has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/25">
      <label htmlFor={id} className="block px-3 pt-2 text-xs font-medium text-foreground">
        Select with inset label (native)
      </label>
      <SelectNative
        id={id}
        defaultValue=""
        className="border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <option value="" disabled>
          Select framework
        </option>
        <option value="1">React</option>
        <option value="2">Next.js</option>
        <option value="3">Astro</option>
        <option value="4">Gatsby</option>
      </SelectNative>
    </div>
  );
}
