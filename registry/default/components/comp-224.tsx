import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Select with description and right indicator</Label>
      <Select defaultValue="2">
        <SelectTrigger id={id} className="[&_[data-desc]]:hidden">
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectItem value="1">
            Standard Plan
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              Ideal for individuals
            </span>
          </SelectItem>
          <SelectItem value="2">
            Pro Plan
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              For professional users
            </span>
          </SelectItem>
          <SelectItem value="3">
            Enterprise Plan
            <span className="mt-1 block text-xs text-muted-foreground" data-desc>
              Built for large teams
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
