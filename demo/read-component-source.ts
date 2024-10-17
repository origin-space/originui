import { promises as fs } from "fs";
import path from "path";

export async function readComponentSource(directory: string, componentName: string) {
  const filePath = path.join(process.cwd(), "components", directory, `${componentName}.tsx`);
  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}
