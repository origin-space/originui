import { useId } from "react"

import { SelectNative } from "@/registry/default/ui/select-native"

export default function Component() {
  const id = useId()
  return (
    <div className="border-input bg-background focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive relative rounded-md border shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px] has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 has-[select:is(:disabled)_*]:pointer-events-none">
      <label
        htmlFor={id}
        className="text-foreground block px-3 pt-2 text-xs font-medium"
      >
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
  )
}
