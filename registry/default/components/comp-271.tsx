import { CircleCheckIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="border-eborder rounded-md border px-4 py-3">
      <p className="text-sm">
        <CircleCheckIcon
          className="me-3 -mt-0.5 inline-flex text-emerald-500"
          size={16}
          aria-hidden="true"
        />
        Completed successfully!
      </p>
    </div>
  )
}
