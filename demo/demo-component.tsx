import { readComponentSource } from "./read-component-source";
import CardComponent from "./card-component";

export default async function DemoComponent({
	directory,
	componentName,
	className,
}: {
	directory: string;
	componentName: string;
	className?: string;
}) {
	// get anchor from url
	const Component = (await import(`@/components/${directory}/${componentName}`))
		.default;
	const source = await readComponentSource(directory, componentName);

	return (
		<CardComponent
			componentName={componentName}
			className={className}
			directory={directory}
			source={source || ""}
		>
			<Component />
		</CardComponent>
	);
}
