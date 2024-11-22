// Dependencies: pnpm install lucide-react

import { TriangleAlert } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <p className="text-sm">
        <TriangleAlert
          className="-mt-0.5 me-3 inline-flex text-amber-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}
