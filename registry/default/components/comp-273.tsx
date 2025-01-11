import { Info } from "lucide-react";

export default function Component() {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <p className="text-sm">
        <Info
          className="-mt-0.5 me-3 inline-flex text-blue-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Just a quick note!
      </p>
    </div>
  );
}
