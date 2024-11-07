import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Select36() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-36">Select with description and right indicator</Label>
      <Select defaultValue="s2">
        <SelectTrigger id="select-36" className="[&_[data-desc]]:hidden">
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
          <SelectItem value="s1">
            Standard Plan
            <span className="block text-xs text-muted-foreground mt-1" data-desc>
              Ideal for individuals
            </span>
          </SelectItem>
          <SelectItem value="s2">
            Pro Plan
            <span className="block text-xs text-muted-foreground mt-1" data-desc>
              For professional users
            </span>
          </SelectItem>
          <SelectItem value="s3">
            Enterprise Plan
            <span className="block text-xs text-muted-foreground mt-1" data-desc>
              Built for large teams
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
