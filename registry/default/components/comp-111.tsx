import { Button } from "@/registry/default/ui/button";
import { QrCodeIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="divide-primary-foreground/30 inline-flex divide-x rounded-lg shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        size="icon"
        aria-label="QR code"
      >
        <QrCodeIcon size={16} aria-hidden="true" />
      </Button>
      <Button className="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10">
        Sign in
      </Button>
    </div>
  );
}
