import type { MetadataRoute } from "next";

/** Written out at build time so the static export can serve sitemap.xml. */
export const dynamic = "force-static";
import { navLinks, policyLinks, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...navLinks.map((l) => l.href),
    ...policyLinks.map((l) => l.href),
    "/contact",
    "/payments",
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
