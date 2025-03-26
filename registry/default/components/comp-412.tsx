export default function Component() {
  return (
    <div className="bg-background flex items-center rounded-full border p-1 shadow-sm">
      <div className="flex -space-x-1.5">
        <img
          className="ring-background rounded-full ring-1"
          src="/avatar-80-03.jpg"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="ring-background rounded-full ring-1"
          src="/avatar-80-04.jpg"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="ring-background rounded-full ring-1"
          src="/avatar-80-05.jpg"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="ring-background rounded-full ring-1"
          src="/avatar-80-06.jpg"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="text-muted-foreground px-2 text-xs">
        Trusted by <strong className="text-foreground font-medium">60K+</strong>{" "}
        developers.
      </p>
    </div>
  )
}
