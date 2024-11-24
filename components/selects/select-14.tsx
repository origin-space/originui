import { SelectNative } from "@/components/ui/select-native";

export default function SelectDemo() {
  return (
    <div className="relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 [&:has(select:is(:disabled))_*]:pointer-events-none">
      <label htmlFor="select-14" className="block px-3 pt-2 text-xs font-medium text-foreground">
        Select with inset label (native)
      </label>
      <SelectNative
        id="select-14"
        defaultValue=""
        className="border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <option value="" disabled>
          Select framework
        </option>
        <option value="s1">React</option>
        <option value="s2">Next.js</option>
        <option value="s3">Astro</option>
        <option value="s4">Gatsby</option>
      </SelectNative>
    </div>
  );
}
