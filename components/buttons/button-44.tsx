// Dependencies: pnpm install @remixicon/react

import { Button } from "@/components/ui/button";
import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiTwitterXFill } from "@remixicon/react";

export default function Button44() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline">
        <RiGoogleFill
          className="me-3 text-[#DB4437] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with Google
      </Button>
      <Button variant="outline">
        <RiTwitterXFill
          className="me-3 text-[#14171a] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with X
      </Button>
      <Button variant="outline">
        <RiFacebookFill
          className="me-3 text-[#1877f2] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with Facebook
      </Button>
      <Button variant="outline">
        <RiGithubFill
          className="me-3 text-[#333333] dark:text-white/60"
          size={16}
          aria-hidden="true"
        />
        Login with GitHub
      </Button>
    </div>
  );
}
