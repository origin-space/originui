import Cta from "@/components/cta";
import DemoComponent from "@/components/demo-component";
import PageHeader from "@/components/page-header";
import PageGrid from "@/components/page-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breadcrumb and Pagination Components - Origin UI",
  description:
    "A collection of beautiful and accessible breadcrumb and pagination components built with Tailwind CSS and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex items-center justify-center";
const components: Component[] = [
  { name: "comp-446", className: center },
  { name: "comp-447", className: center },
  { name: "comp-448", className: center },
  { name: "comp-449", className: center },
  { name: "comp-450", className: center },
  { name: "comp-451", className: center },
  { name: "comp-452", className: center },
  { name: "comp-453", className: center },
  { name: "comp-454" },
  { name: "comp-455" },
  { name: "comp-456" },
  { name: "comp-457" },
  { name: "comp-458" },
  { name: "comp-459" },
  { name: "comp-460" },
  { name: "comp-461" },
  { name: "comp-462" },
  { name: "comp-463" },
  { name: "comp-464" },
  { name: "comp-465" },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Breadcrumb and Pagination">
            A growing collection of {components.length} breadcrumb and pagination components built
            with Next.js and TailwindCSS.
          </PageHeader>

          <PageGrid>
            {components.map((component) => {
              return (
                <DemoComponent
                  key={component.name}
                  componentName={component.name}
                  className={component.className}
                  currentPage={1}
                  totalPages={10}                  
                />
              );
            })}
          </PageGrid>

          <Cta />
        </div>
      </div>
    </main>
  );
}
