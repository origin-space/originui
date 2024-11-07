export default function Input33() {
  return (
    <div className="relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 ring-offset-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
      <label htmlFor="input-33" className="block px-3 pt-2 text-xs font-medium text-foreground">
        Input with inset label
      </label>
      <input
        id="input-33"
        className="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
