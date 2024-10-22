import { Input } from "@/components/ui/input";

export default function Input31() {
  return (
    <div className="group relative">
      <label
        htmlFor="input-31"
        className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[:disabled]:opacity-50"
      >
        Input with overlapping label
      </label>
      <Input id="input-31" className="h-10" placeholder="Email" type="email" />
    </div>
  );
}
