import { ArrowRightIcon, TriangleAlert } from "lucide-react"

export default function Component() {
  return (
    <div className="rounded-md border px-4 py-3">
      <div className="flex gap-3">
        <TriangleAlert
          className="hrink-0 mt-0.5 text-amber-500"
          size={16}
          aria-hidden="true"
        />
        <div className="flex grow justify-between gap-3">
          <p className="text-sm">Some information is missing!</p>
          <a href="#" className="group text-sm font-medium whitespace-nowrap">
            Link
            <ArrowRightIcon
              className="ms-1 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
