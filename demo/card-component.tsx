"use client";
import { cn } from "@/lib/utils";
import LinkButton from "./link-button";
import CopyButton from "./copy-button";
import { useEffect, useRef } from "react";
import { useState } from "react";
import NameComponent from "./name-component";

const CardComponent = ({
	componentName,
	directory,
	className,
	children,
	source,
}: {
	componentName: string;
	directory: string;
	className?: string;
	children: React.ReactNode;
	source: string;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [selected, setSelected] = useState(false);

	useEffect(() => {
		const isSelected =
			typeof window !== "undefined" &&
			window.location.hash === `#${componentName}`;

		if (isSelected) {
			setTimeout(() => {
				window.scrollTo({
					top: (ref.current?.offsetTop || 0) - window.innerHeight / 2 + 160,
					behavior: "smooth",
				});
				setSelected(isSelected);
			}, 300);
		}
	}, [componentName]);

	return (
		<div
			ref={ref}
			data-selected={selected}
			className={cn(
				"group/item relative hover",
				selected && "bg-zinc-50",
				className,
			)}
		>
			{children}
			<NameComponent componentName={componentName} isSelected={selected} />
			<LinkButton componentName={componentName} directory={directory} />
			<CopyButton componentSource={source || ""} />
		</div>
	);
};

export default CardComponent;
