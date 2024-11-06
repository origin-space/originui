import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Select35() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-35">Options with emojis and right indicator</Label>
      <Select defaultValue="s2">
        <SelectTrigger id="select-35" className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:gap-2 [&_*[role=option]>span]:items-center [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80">
          <SelectGroup>
            <SelectLabel className="ps-2">America</SelectLabel>
            <SelectItem value="s1"><span className="text-lg leading-none">🇺🇸</span> United States</SelectItem>
            <SelectItem value="s2"><span className="text-lg leading-none">🇨🇦</span> Canada</SelectItem>
            <SelectItem value="s3"><span className="text-lg leading-none">🇲🇽</span> Mexico</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel className="ps-2">Africa</SelectLabel>
            <SelectItem value="s4"><span className="text-lg leading-none">🇿🇦</span> South Africa</SelectItem>
            <SelectItem value="s5"><span className="text-lg leading-none">🇳🇬</span> Nigeria</SelectItem>
            <SelectItem value="s6"><span className="text-lg leading-none">🇲🇦</span> Morocco</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel className="ps-2">Asia</SelectLabel>
            <SelectItem value="s7"><span className="text-lg leading-none">🇨🇳</span> China</SelectItem>
            <SelectItem value="s8"><span className="text-lg leading-none">🇯🇵</span> Japan</SelectItem>
            <SelectItem value="s9"><span className="text-lg leading-none">🇮🇳</span> India</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel className="ps-2">Europe</SelectLabel>
            <SelectItem value="s10"><span className="text-lg leading-none">🇬🇧</span> United Kingdom</SelectItem>
            <SelectItem value="s11"><span className="text-lg leading-none">🇫🇷</span> France</SelectItem>
            <SelectItem value="s12"><span className="text-lg leading-none">🇩🇪</span> Germany</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel className="ps-2">Oceania</SelectLabel>
            <SelectItem value="s13"><span className="text-lg leading-none">🇦🇺</span> Australia</SelectItem>
            <SelectItem value="s14"><span className="text-lg leading-none">🇳🇿</span> New Zealand</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
