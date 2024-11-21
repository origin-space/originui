import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alert, Notification, and Banner Components - Origin UI",
  description:
    "A collection of beautiful and accessible alert and banner components built with Tailwind CSS and Next.js.",
};

const alertDir = "alerts";
const alertFiles = [
  "alert-07",
  "alert-01",
  "alert-08",
  "alert-02",
  "alert-09",
  "alert-03",
  "alert-12",
  "alert-10",
  "alert-18",
  "alert-16",
  "alert-20",
  "alert-19",
  "alert-15",
  "alert-13",
];

const notificationDir = "notifications";
const notificationFiles = [
  "notification-01",
  "notification-02",
  "notification-03",
  "notification-03b",
  "notification-04",
  "notification-05",
  "notification-06",
  "notification-06b",
  "notification-17",
  "notification-18",
  "notification-09",
  "notification-10",
  "notification-11",
  "notification-12",
  "notification-13",
  "notification-14",
  "notification-15",
  "notification-16",
  "notification-21",
  "notification-20",
  "notification-22",
  "notification-23",
];

const bannerDir = "banners";
const bannerFiles = [
  "banner-01",
  "banner-02",
  "banner-19",
  "banner-20",
  "banner-21",
  "banner-22",
  "banner-23",
  "banner-24",
  "banner-25",
  "banner-03",
  "banner-14",
  "banner-27",
  "banner-28",
  "banner-29",
  "banner-30",
];

const totalAlerts = alertFiles.length;
const totalBanners = bannerFiles.length;
const totalNotifications = notificationFiles.length;
const totalComponents = totalAlerts + totalBanners + totalNotifications + 1;

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Alert, Notification, and Banner">
            A growing collection of {totalComponents} alert, notification, and banner components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 border-b border-border/70 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {alertFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={alertDir}
                  componentName={componentName}
                />
              );
            })}
          </div>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 border-b border-border/70 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {notificationFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  className="flex justify-center items-center"
                  directory={notificationDir}
                  componentName={componentName}
                />
              );
            })}
          </div>          

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            <DemoComponent
              directory="notifications"
              componentName="notification-19"
            />
            {bannerFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={bannerDir}
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
