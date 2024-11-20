import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";

const directory = "sliders";
const files = [
  "slider-01",
  "slider-02",
  "slider-03",
  "slider-04",
  "slider-05",
  "slider-06",
  "slider-07",
  "slider-08",
  "slider-09",
  "slider-10",
  "slider-11",
  "slider-12",
  "slider-13",
  "slider-14",
  "slider-15",
  "slider-16",
  "slider-17",
  "slider-18",
  "slider-19",
  "slider-20",
  "slider-21",
  "slider-22",
  "slider-23",
  "slider-24",
  "slider-25",
  "slider-26",
  "slider-27",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Slider">
            A growing collection of {files.length} slider components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {files.map((componentName) => {
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
