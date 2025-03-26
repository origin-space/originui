export default function Footer() {
  return (
    <footer className="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mt-16 py-8 before:absolute before:-inset-x-32 before:top-0 before:h-px md:mt-20">
      <div
        className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-top-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-top-px after:-right-12 after:z-10 after:-mr-px after:size-[3px]"
        aria-hidden="true"
      ></div>
      <div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Origin UI
        </p>
        <p className="text-muted-foreground text-sm">
          A project by{" "}
          <a
            className="text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
            href="https://x.com/pacovitiello"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pasquale
          </a>{" "}
          and{" "}
          <a
            className="text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
            href="https://x.com/DavidePacilio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Davide
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
