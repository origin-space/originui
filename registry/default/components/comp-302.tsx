import { ArrowRightIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="dark bg-muted text-foreground px-4 py-3">
      <p className="flex justify-center text-sm">
        <a href="#" className="group">
          <span className="me-1 text-base leading-none">✨</span>
          Introducing transactional and marketing emails
          <ArrowRightIcon
            className="ms-2 -mt-0.5 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
        </a>
      </p>
    </div>
  )
}
