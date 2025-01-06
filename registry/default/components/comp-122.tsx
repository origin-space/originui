import { Button } from "@/registry/default/ui/button";
import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiTwitterXFill } from "@remixicon/react";

export default function Component() {
  return (
    <div className="flex flex-col gap-2">
      <Button className="bg-[#DB4437] text-white after:flex-1 hover:bg-[#DB4437]/90">
        <span className="pointer-events-none me-2 flex-1">
          <RiGoogleFill className="opacity-60" size={16} aria-hidden="true" />
        </span>
        Login with Google
      </Button>
      <Button className="bg-[#14171a] text-white after:flex-1 hover:bg-[#14171a]/90">
        <span className="pointer-events-none me-2 flex-1">
          <RiTwitterXFill className="opacity-60" size={16} aria-hidden="true" />
        </span>
        Login with X
      </Button>
      <Button className="bg-[#1877f2] text-white after:flex-1 hover:bg-[#1877f2]/90">
        <span className="pointer-events-none me-2 flex-1">
          <RiFacebookFill className="opacity-60" size={16} aria-hidden="true" />
        </span>
        Login with Facebook
      </Button>
      <Button className="bg-[#333333] text-white after:flex-1 hover:bg-[#333333]/90">
        <span className="pointer-events-none me-2 flex-1">
          <RiGithubFill className="opacity-60" size={16} aria-hidden="true" />
        </span>
        Login with GitHub
      </Button>
    </div>
  );
}
