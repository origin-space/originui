import CopyButton from "./copy-button";
import { readComponentSource } from "./read-component-source";

export default async function DemoComponent({
  directory,
  componentName,
}: {
  directory: string;
  componentName: string;
}) {
  const Component = (await import(`@/components/${directory}/${componentName}`)).default;
  const source = await readComponentSource(componentName);

  return (
    <div className="group/item relative">
      <Component />
      <CopyButton componentSource={source || ""} />
    </div>
  );
}
