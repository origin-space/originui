import { promises as fs } from "fs";
import path from "path";

export async function readComponentSource(componentName: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "r",
    `${componentName}.json`
  );
  try {
    const source = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(source);
    return json || null;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}
