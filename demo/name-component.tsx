import { cn } from "@/lib/utils";

interface NameComponentProps {
	componentName: string;
	isSelected: boolean;
}

const NameComponent = ({ componentName, isSelected }: NameComponentProps) => {
	return (
		<div
			className={cn(
				"absolute font-mono text-zinc-400 text-xs top-2 left-2 flex items-center gap-2",
				!isSelected && "group-hover/item:opacity-100 opacity-0",
			)}
		>
			{componentName}
		</div>
	);
};

export default NameComponent;
