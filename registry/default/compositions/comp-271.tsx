import { CircleCheck } from "lucide-react";

export default function Component() {
  return (
    <div className="border-eborder rounded-lg border px-4 py-3">
      <p className="text-sm">
        <CircleCheck
          className="-mt-0.5 me-3 inline-flex text-emerald-500"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
        Completed successfully!
      </p>
    </div>
  );
}
