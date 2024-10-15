import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input14() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-14">Input with left add-on</Label>
      <div className="flex rounded-lg shadow-sm shadow-black/[.04]">
        <span className="-z-10 inline-flex items-center rounded-l-lg border border-input bg-background px-3 text-sm text-muted-foreground">
          https://
        </span>
        <Input
          id="input-14"
          className="-ml-px rounded-l-none shadow-none"
          placeholder="google.com"
          type="text"
        />
      </div>
    </div>
  );
}
