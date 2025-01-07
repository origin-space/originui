import { Button } from "@/registry/default/ui/button";
import { RiFacebookFill, RiGithubFill, RiGoogleFill, RiTwitterXFill } from "@remixicon/react";

export default function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button className="flex-1" variant="outline" aria-label="Login with Google" size="icon">
        <RiGoogleFill className="text-[#DB4437] dark:text-primary" size={16} aria-hidden="true" />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with Facebook" size="icon">
        <RiFacebookFill className="text-[#1877f2] dark:text-primary" size={16} aria-hidden="true" />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with X" size="icon">
        <RiTwitterXFill className="text-[#14171a] dark:text-primary" size={16} aria-hidden="true" />
      </Button>
      <Button className="flex-1" variant="outline" aria-label="Login with GitHub" size="icon">
        <RiGithubFill className="text-black dark:text-primary" size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
