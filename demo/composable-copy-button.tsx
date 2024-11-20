"use client";

/**
 * Eventually, if merged, we can compose this with the regular copy button
 * for now, it's just a simple copy button
 *
 * Had to add it in another file for client functionality
 */

import { Button, ButtonProps } from "@/components/ui/button";

export function ComposableCopyButton({ text, onClick, ...props }: { text: string } & ButtonProps) {
  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(text);
      onClick?.(e);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return <Button onClick={handleCopy} {...props} />;
}
