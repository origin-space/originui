import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avatar, Badge, and Chip Components - Origin UI",
  description:
    "A collection of beautiful and accessible avatar, badge and chip components built with Tailwind CSS and Next.js.",
};

const avatarDir = "avatars";
const avatarFiles = [
  "avatar-02",
  "avatar-01",
  "avatar-01b",
  "avatar-02b",
  "avatar-03",
  "avatar-04",
  "avatar-04b",
  "avatar-05",
  "avatar-06",
  "avatar-07",
];

const badgeDir = "badges";
const badgeFiles = [
  "badge-01",
  "badge-01a",
  "badge-01b",
  "badge-02",
  "badge-03",
  "badge-04",
  "badge-05",
  "badge-06",
  "badge-07",
];

const chipDir = "chips";
const chipFiles = [
  "chip-01",
  "chip-02",
];

const totalAvatars = avatarFiles.length;
const totalBadges = badgeFiles.length;
const totalChips = chipFiles.length;
const totalComponents = totalAvatars + totalBadges + totalChips;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Avatar, Badge, and Chip">
            A growing collection of {totalComponents} avatar, badge and chip components built
            with Next.js and TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {avatarFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={avatarDir}
                  componentName={componentName}
                  className="flex justify-center items-center"
                />
              );
            })}
            {badgeFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={badgeDir}
                  componentName={componentName}
                  className="flex justify-center items-center"
                />
              );
            })}
            {chipFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={chipDir}
                  componentName={componentName}
                  className="flex justify-center items-center"
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
