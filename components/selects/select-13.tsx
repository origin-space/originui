import { SelectNative } from "@/components/ui/select-native";

export default function Select13() {
  return (
    <div className="group relative">
      <label
        htmlFor="select-13"
        className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[select:disabled]:opacity-50"
      >
        Select with overlapping label (native)
      </label>
      <SelectNative id="select-13" defaultValue="">
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
