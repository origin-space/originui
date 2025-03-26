import { TriangleAlert } from "lucide-react"

export default function Component() {
  return (
    <div className="rounded-md border px-4 py-3">
      <p className="text-sm">
        <TriangleAlert
          className="me-3 -mt-0.5 inline-flex text-amber-500"
          size={16}
          aria-hidden="true"
        />
        Some information is missing!
      </p>
    </div>
  )
}
