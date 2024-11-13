import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countries = [
  {
    continent: "America",
    items: [
      { value: "s1", label: "United States", flag: "🇺🇸" },
      { value: "s2", label: "Canada", flag: "🇨🇦" },
      { value: "s3", label: "Mexico", flag: "🇲🇽" },
    ],
  },
  {
    continent: "Africa",
    items: [
      { value: "s4", label: "South Africa", flag: "🇿🇦" },
      { value: "s5", label: "Nigeria", flag: "🇳🇬" },
      { value: "s6", label: "Morocco", flag: "🇲🇦" },
    ],
  },
  {
    continent: "Asia",
    items: [
      { value: "s7", label: "China", flag: "🇨🇳" },
      { value: "s8", label: "Japan", flag: "🇯🇵" },
      { value: "s9", label: "India", flag: "🇮🇳" },
    ],
  },
  {
    continent: "Europe",
    items: [
      { value: "s10", label: "United Kingdom", flag: "🇬🇧" },
      { value: "s11", label: "France", flag: "🇫🇷" },
      { value: "s12", label: "Germany", flag: "🇩🇪" },
    ],
  },
  {
    continent: "Oceania",
    items: [
      { value: "s13", label: "Australia", flag: "🇦🇺" },
      { value: "s14", label: "New Zealand", flag: "🇳🇿" },
    ],
  },
];

export default function Select37() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-37">Options with flag</Label>
      <Select defaultValue="s2">
        <SelectTrigger
          id="select-37"
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          {countries.map((continent) => (
            <SelectGroup key={continent.continent}>
              <SelectLabel className="ps-2">{continent.continent}</SelectLabel>
              {continent.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  <span className="text-lg leading-none">{item.flag}</span>{" "}
                  <span className="truncate">{item.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
