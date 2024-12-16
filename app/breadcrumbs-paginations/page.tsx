import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breadcrumb and Pagination Components - Origin UI",
  description:
    "A collection of beautiful and accessible breadcrumb and pagination components built with Tailwind CSS and Next.js.",
};

const breadcrumbDir = "breadcrumbs";
const breadcrumbFiles = [
  "breadcrumb-01",
  "breadcrumb-02",
  "breadcrumb-03",
  "breadcrumb-04",
  "breadcrumb-05",
  "breadcrumb-06",
  "breadcrumb-07",
  "breadcrumb-08",
];

const paginationDir = "paginations";
const paginationFiles = [
  "pagination-01",
  "pagination-02",
  "pagination-03",
  "pagination-04",
  "pagination-05",
  "pagination-06",
  "pagination-07",
  "pagination-08",
  "pagination-09",
  "pagination-10",
  "pagination-11",
  "pagination-12",
];

const totalComponents = breadcrumbFiles.length + paginationFiles.length;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Breadcrumb and Pagination">
            A growing collection of {totalComponents} breadcrumb and pagination components built
            with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {breadcrumbFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={breadcrumbDir}
                  componentName={componentName}
                  className="flex items-start justify-center"
                />
              );
            })}
            {paginationFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={paginationDir}
                  componentName={componentName}
                  currentPage={1}
                  totalPages={10}
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
