import { TriangleAlert } from "lucide-react";

export default function Component() {
  return (
    <div className="rounded-md border border-amber-500/50 px-4 py-3 text-amber-600">
      <p className="text-sm">
        <TriangleAlert
          className="me-3 -mt-0.5 inline-flex opacity-60"
          size={16}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  );
}
