import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Avatar01 from "@/public/avatar-40-01.jpg";
import Avatar02 from "@/public/avatar-40-02.jpg";
import Avatar03 from "@/public/avatar-40-03.jpg";
import Image from "next/image";

export default function Select40() {
  return (
    <div className="space-y-2">
      <Label htmlFor="select-40">Options with portrait</Label>
      <Select defaultValue="s1">
        <SelectTrigger
          id="select-40"
          className="h-auto ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
        >
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectItem value="s1">
            <span className="flex items-center gap-2">
              <Image
                className="size-10 rounded-full"
                src={Avatar01}
                alt="Jenny Hamilton"
                width={40}
                height={40}
              />
              <span>
                <span className="block font-medium">Jenny Hamilton</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">@jennycodes</span>
              </span>
            </span>
          </SelectItem>
          <SelectItem value="s2">
            <span className="flex items-center gap-2">
              <Image
                className="size-10 rounded-full"
                src={Avatar02}
                alt="Paul Smith"
                width={40}
                height={40}
              />
              <span>
                <span className="block font-medium">Paul Smith</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">@paulsmith</span>
              </span>
            </span>
          </SelectItem>
          <SelectItem value="s3">
            <span className="flex items-center gap-2">
              <Image
                className="size-10 rounded-full"
                src={Avatar03}
                alt="Luna Wyen"
                width={40}
                height={40}
              />
              <span>
                <span className="block font-medium">Luna Wyen</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">@wyen.luna</span>
              </span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
