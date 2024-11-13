import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input04() {
  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-1">
        <Label htmlFor="input-04" className="leading-6">
          Input with hint
        </Label>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Input id="input-04" placeholder="Email" type="email" />
    </>
  );
}
