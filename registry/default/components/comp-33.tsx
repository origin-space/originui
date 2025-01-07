import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
      <label htmlFor={id} className="block px-3 pt-2 text-xs font-medium text-foreground">
        Input with inset label
      </label>
      <input
        id={id}
        className="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
