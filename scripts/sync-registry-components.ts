import fs from "fs";
import path from "path";
import { ComponentDefinition, components } from "./registry-components";

const COMPONENTS_DIR = ["/components/inputs"];
const LIBRARIES_TO_IGNORE = ["react", "lucide-react"];

function extractImports(fileContent: string) {
  const importRegex = /import\s+(?:{[^}]+}\s+from\s+)?['"]([^'"]+)['"]/g;

  const registryDependencies: string[] = [];
  const dependencies: string[] = [];

  const matchs = fileContent.matchAll(importRegex);

  for (let match of matchs) {
    const importPath = match[1];

    if (importPath.startsWith("@/components/ui")) {
      const componentName = importPath.split("/").pop();
      if (!componentName) continue;
      registryDependencies.push(componentName);
    } else if (
      importPath.startsWith(".") ||
      importPath.startsWith("@") ||
      LIBRARIES_TO_IGNORE.includes(importPath)
    ) {
      // ignore
      continue;
    } else {
      dependencies.push(importPath);
    }
  }

  return [registryDependencies, dependencies];
}

function updateRegistryComponents() {
  const componentsDirs = COMPONENTS_DIR.map((dir) => path.join(process.cwd(), dir));
  const existingComponents = new Map(
    components.map((c) => [path.basename(c.path.replace("../components/", "")), c]),
  );
  // console.log("existingComponents", existingComponents);

  let newComponents: ComponentDefinition[] = [];

  const files: string[] = [];

  //   read all the directories in componentsDir
  componentsDirs.forEach((componentsDir) => {
    const filesInDir = fs
      .readdirSync(componentsDir)
      .filter((file) => file.endsWith(".tsx") && file !== "index.ts")
      .map((file) => path.join(componentsDir, file));

    files.push(...filesInDir);
  });

  //   skip if that component already exist and not updated
  for (const file of files) {
    if (existingComponents.has(path.basename(file))) continue;
    const content = fs.readFileSync(file, "utf8");
    const componentName = path.basename(file, ".tsx");
    const [registryDependencies, dependencies] = extractImports(content);

    const basePath = Array.from(file.matchAll(/components\/(.*)/g))[0];

    const component: ComponentDefinition = {
      name: componentName,
      path: path.join("../components/", basePath[1]),
      registryDependencies,
      dependencies,
    };

    newComponents.push(component);
  }

  if (newComponents.length === 0) {
    console.log("no new components to add.");
    return;
  }

  const newComponentsString = newComponents.map((comp) => JSON.stringify(comp)).join(","); //jsonify and then join

  const registryPath = path.join(__dirname, "registry-components.ts");
  const content = fs.readFileSync(registryPath, "utf8");
  const lastComponentIndex = content.lastIndexOf("}");
  const updatedContent =
    content.slice(0, lastComponentIndex + 1) + ",\n" + newComponentsString + "\n];";

  fs.writeFileSync(registryPath, updatedContent);

  console.log(`added ${newComponents.length} new components:`);
  console.log(newComponents.map((c) => c.name).join(", "));
}

updateRegistryComponents();
