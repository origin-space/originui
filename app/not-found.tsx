import { Button } from "@/components/ui/button";
import Illustration from "@/demo/illustration";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Illustration />

      <main className="flex flex-1 flex-col items-center justify-center gap-5">
        <h1 className="mb-4 text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
          Page not found
        </h1>

        <Button size="lg" variant="outline">
          <Link href="/">Go to homepage</Link>
        </Button>
      </main>
    </>
  );
}
