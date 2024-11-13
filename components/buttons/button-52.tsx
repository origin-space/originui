import { Button } from "@/components/ui/button";

export default function Button52() {
  return (
    <Button
      variant={"outline"}
      className="
        dark:text-black text-white hover:text-white
        animate-shimmer
        bg-gradient-to-r from-primary via-primary/75 to-primary
        bg-[length:400%_100%]
        inline-flex items-center justify-center
        whitespace-nowrap rounded-md text-sm font-medium
      "
    >
      Button
    </Button>
  );
}