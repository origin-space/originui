import { Info } from "lucide-react";

export default function Component() {
  return (
    <div className="rounded-lg border border-blue-500/50 px-4 py-3 text-blue-600">
      <p className="text-sm">
        <Info
          className="-mt-0.5 me-3 inline-flex opacity-60"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Just a quick note!
      </p>
    </div>
  );
}
