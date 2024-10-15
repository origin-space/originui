import { Input } from "@/components/ui/input";

export default function Input32() {
  return (
    <div className="group relative">
      <label
        htmlFor="input-32"
        className="[&:has(+input:not(:muted-foreground/70-shown))]:pointer-events-none [&:has(+input:not(:muted-foreground/70-shown))]:top-0 [&:has(+input:not(:muted-foreground/70-shown))]:-translate-y-1/2 [&:has(+input:not(:muted-foreground/70-shown))]:cursor-default [&:has(+input:not(:muted-foreground/70-shown))]:text-xs [&:has(+input:not(:muted-foreground/70-shown))]:font-medium [&:has(+input:not(:muted-foreground/70-shown))]:text-foreground absolute top-1/2 block origin-left -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground"
      >
        <span className="inline-flex bg-background px-2">Input with label animation</span>
      </label>
      <Input id="input-32" type="email" placeholder="" />
    </div>
  );
}
