"use client";

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, Link2 } from "lucide-react";

interface ShareButtonProps {
	componentName: string;
	directory: string;
}

const ShareButton = ({ componentName, directory }: ShareButtonProps) => {
	const [copied, setCopied] = useState<boolean>(false);

	const handleCopy = async () => {
		try {
			const url =
				typeof window !== "undefined" &&
				`${window.location.origin}/${directory}#${componentName}`;
			await navigator.clipboard.writeText(url || "");
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error("Failed to copy link: ", err);
		}
	};

	return (
		<div
			className={cn(
				"absolute right-8 top-2 transition-opacity",
				!copied &&
					"lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100",
			)}
		>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
							onClick={handleCopy}
							aria-label={copied ? "Copied" : "Copy component source"}
							disabled={copied}
						>
							<div
								className={cn(
									"transition-all",
									copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
								)}
							>
								<Check
									size={16}
									strokeWidth={2}
									aria-hidden="true"
									className="text-green-500"
								/>
							</div>
							<div
								className={cn(
									"absolute transition-all",
									copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
								)}
							>
								<Link2 size={16} strokeWidth={2} aria-hidden="true" />
							</div>
						</Button>
					</TooltipTrigger>
					<TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
						Copy Link
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

export default ShareButton;
