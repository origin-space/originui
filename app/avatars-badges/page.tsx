import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avatar and Badge Components - Origin UI",
  description:
    "A collection of beautiful and accessible avatar and badge components built with Tailwind CSS and Next.js.",
};

const avatarDir = "avatars";
const avatarFiles = [
  "avatar-01",
  "avatar-02",
  "avatar-03",
  "avatar-04",
  "avatar-05",
  "avatar-06",
  "avatar-07",
  "avatar-08",
  "avatar-09",
  "avatar-10",
  "avatar-11",
  "avatar-12",
  "avatar-13",
  "avatar-14",
  "avatar-15",
  "avatar-16",
  "avatar-17",
  "avatar-18",
  "avatar-19",
  "avatar-20",
  "avatar-21",
  "avatar-22",
  "avatar-23",
];

const badgeDir = "badges";
const badgeFiles = [
  "badge-01",
  "badge-02",
  "badge-03",
  "badge-04",
  "badge-05",
  "badge-06",
  "badge-07",
  "badge-08",
  "badge-09",
  "badge-10",
  "badge-11",
  "badge-12",
  "badge-13",
];

const totalAvatars = avatarFiles.length;
const totalBadges = badgeFiles.length;
const totalComponents = totalAvatars + totalBadges;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Avatar and Badge">
            A growing collection of {totalComponents} avatar and badge components built with Next.js
            and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {avatarFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={avatarDir}
                  componentName={componentName}
                  className="flex items-center justify-center"
                />
              );
            })}
            {badgeFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={badgeDir}
                  componentName={componentName}
                  className="flex items-center justify-center"
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
