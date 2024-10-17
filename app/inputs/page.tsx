import DemoComponent from "@/demo/demo-component";
import Cta from "@/demo/cta";

// Define an array of input file names
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
  "input-13",
  "input-14",
  "input-15",
  "input-16",
  "input-17",
  "input-18",
  "input-19",
  "input-20",
  "input-21",
  "input-22",
  "input-23",
  "input-24",
  "input-25",
  "input-26",
  "input-27",
  "input-28",
  "input-29",
  "input-30",
  "input-31",
  "input-32",
  "input-33",
  "input-34",
  "input-35",
  "input-36",
  "input-37",
  "input-38",
  "input-39",
  "input-40",
  "input-41",
  "input-42",
  "input-43",
  "input-44",
  "input-45",
  "input-46",
  "input-47",
  "input-48",
  "input-49",
  "input-50",
  "input-51",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 text-center">
            <h1 className="mb-3 text-3xl font-black text-foreground md:text-4xl">Input</h1>
            <p className="text-muted-foreground">
              A growing collection of over 50 input components built with Next.js and TailwindCSS.
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {inputFiles.map((componentName) => {
              const directory = "inputs";
              return (
                <DemoComponent
                  key={componentName}
                  directory={directory}
                  componentName={componentName}
                />
              );
            })}
          </div>

          <Cta />
        </div>
      </div>
    </main>
  );
}
