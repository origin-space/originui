import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Angry, Frown, Meh, Smile, Laugh } from "lucide-react";

const items = [
  { id: "radio-16-r1", value: "r1", label: "Angry", icon: "😠" },
  { id: "radio-16-r2", value: "r2", label: "Sad", icon: "🙁" },
  { id: "radio-16-r3", value: "r3", label: "Neutral", icon: "😐" },
  { id: "radio-16-r4", value: "r4", label: "Happy", icon: "🙂" },
  { id: "radio-16-r5", value: "r5", label: "Laughing", icon: "😀" },
];

export default function Radio16() {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium leading-none text-foreground">What's your mood?</legend>    
      <RadioGroup className="flex gap-1.5" defaultValue="r3">
        {items.map((item) => (
          <label key={item.id} className="relative items-center justify-center text-center text-xl size-9 border border-input rounded-full shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-amber-500 has-[[data-state=checked]]:bg-amber-100 flex flex-col gap-3 cursor-pointer ring-offset-background transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-amber-500/30 has-[:focus-visible]:ring-offset-2 has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50">
            <RadioGroupItem
              id={item.id}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
            />
            {item.icon}
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
