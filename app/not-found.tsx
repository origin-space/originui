import { buttonVariants } from "@/components/ui/button";
import Illustration from "@/demo/illustration";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Illustration />
      <div className="flex min-h-[87vh] flex-col items-center gap-4 px-2 py-36 sm:py-28">
        <div className="flex w-fit flex-col items-center justify-center gap-2 text-center">
          <h2 className="pr-1 text-7xl font-bold">404</h2>
          <p className="text-md font-medium text-muted-foreground">Page not found {":("}</p>
          <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Link href="/" className={buttonVariants({})}>
          Back to homepage
        </Link>
      </div>
    </>
  );
}
