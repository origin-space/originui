import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button Components - Origin UI",
  description:
    "A collection of beautiful and accessible button components built with Tailwind CSS and Next.js.",
};

const files = [
  "comp-78",
  "comp-79",
  "comp-80",
  "comp-81",
  "comp-82",
  "comp-83",
  "comp-84",
  "comp-85",
  "comp-86",
  "comp-87",
  "comp-88",
  "comp-89",
  "comp-90",
  "comp-91",
  "comp-92",
  "comp-93",
  "comp-94",
  "comp-95",
  "comp-96",
  "comp-97",
  "comp-98",
  "comp-99",
  "comp-100",
  "comp-101",
  "comp-102",
  "comp-103",
  "comp-104",
  "comp-105",
  "comp-106",
  "comp-107",
  "comp-108",
  "comp-109",
  "comp-110",
  "comp-111",
  "comp-112",
  "comp-113",
  "comp-114",
  "comp-115",
  "comp-116",
  "comp-117",
  "comp-118",
  "comp-119",
  "comp-120",
  "comp-121",
  "comp-122",
  "comp-123",
  "comp-124",
  "comp-125",
  "comp-126",
  "comp-127",
  "comp-128",
  "comp-129",
  "comp-130",
  "comp-131",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Button">
            A growing collection of {files.length} button components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {files.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  componentName={componentName}
                  className="text-center"
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
