import { Info } from "lucide-react";

export default function Component() {
  return (
    <div className="border-border rounded-lg border px-4 py-3">
      <p className="text-sm">
        <Info className="me-3 -mt-0.5 inline-flex text-blue-500" size={16} aria-hidden="true" />
        Just a quick note!
      </p>
    </div>
  );
}
