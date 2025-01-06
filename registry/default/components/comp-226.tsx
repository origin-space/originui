import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Options with avatar</Label>
      <Select defaultValue="1">
        <SelectTrigger
          id={id}
          className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
        >
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectGroup>
            <SelectLabel className="ps-2">Impersonate user</SelectLabel>
            <SelectItem value="1">
              <img
                className="size-5 rounded"
                src="/avatar-20-01.jpg"
                alt="Frank Allison"
                width={20}
                height={20}
              />
              <span className="truncate">Jenny Hamilton</span>
            </SelectItem>
            <SelectItem value="2">
              <img
                className="size-5 rounded"
                src="/avatar-20-02.jpg"
                alt="Xavier Guerra"
                width={20}
                height={20}
              />
              <span className="truncate">Paul Smith</span>
            </SelectItem>
            <SelectItem value="3">
              <img
                className="size-5 rounded"
                src="/avatar-20-03.jpg"
                alt="Anne Kelley"
                width={20}
                height={20}
              />
              <span className="truncate">Luna Wyen</span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
