import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Radio07() {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium leading-none text-foreground">Choose a color</legend>
      <RadioGroup className="flex gap-1.5" defaultValue="blue">
        <RadioGroupItem value="blue" id="radio-07-blue" aria-label="Blue" className="size-6 shadow-none bg-blue-500 border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
        <RadioGroupItem value="indigo" id="radio-07-indigo" aria-label="Indigo" className="size-6 shadow-none bg-indigo-500 border-indigo-500 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500" />
        <RadioGroupItem value="pink" id="radio-07-pink" aria-label="Pink" className="size-6 shadow-none bg-pink-500 border-pink-500 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500" />
        <RadioGroupItem value="red" id="radio-07-red" aria-label="red" className="size-6 shadow-none bg-red-500 border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500" />
        <RadioGroupItem value="orange" id="radio-07-orange" aria-label="orange" className="size-6 shadow-none bg-orange-500 border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
        <RadioGroupItem value="yellow" id="radio-07-yellow" aria-label="yellow" className="size-6 shadow-none bg-yellow-500 border-yellow-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500" />
        <RadioGroupItem value="green" id="radio-07-green" aria-label="green" className="size-6 shadow-none bg-green-500 border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500" />
      </RadioGroup>
    </fieldset>
  )
}
