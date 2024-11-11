import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Input22() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-22">Input with button</Label>
      <div className="flex gap-2">
        <Input id="input-22" className="flex-1" placeholder="Email" type="email" />
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
