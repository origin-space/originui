import { categories } from "@/config/components";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://originui.com",
  };
  const search = {
    url: "https://originui.com/search",
  };
  const easings = {
    url: "https://originui.com/easings",
  };
  const categoryPages = categories.map((category) => ({
    url: `https://originui.com/${category.slug}`,
  }));

  return [home, ...categoryPages, search, easings];
}
