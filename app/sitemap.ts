import type { MetadataRoute } from "next";
import { allRoutes } from "@/content/navigation";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((path) => ({ url: new URL(path, site.url).toString() }));
}
