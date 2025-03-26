import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function Component() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">
        Choose a color
      </legend>
      <RadioGroup className="flex gap-1.5" defaultValue="blue">
        <RadioGroupItem
          value="blue"
          aria-label="Blue"
          className="size-6 border-blue-500 bg-blue-500 shadow-none data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
        />
        <RadioGroupItem
          value="indigo"
          aria-label="Indigo"
          className="size-6 border-indigo-500 bg-indigo-500 shadow-none data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
        />
        <RadioGroupItem
          value="pink"
          aria-label="Pink"
          className="size-6 border-pink-500 bg-pink-500 shadow-none data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500"
        />
        <RadioGroupItem
          value="red"
          aria-label="red"
          className="size-6 border-red-500 bg-red-500 shadow-none data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
        />
        <RadioGroupItem
          value="orange"
          aria-label="orange"
          className="size-6 border-orange-500 bg-orange-500 shadow-none data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
        />
        <RadioGroupItem
          value="amber"
          aria-label="amber"
          className="size-6 border-amber-500 bg-amber-500 shadow-none data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500"
        />
        <RadioGroupItem
          value="emerald"
          aria-label="emerald"
          className="size-6 border-emerald-500 bg-emerald-500 shadow-none data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
        />
      </RadioGroup>
    </fieldset>
  )
}
