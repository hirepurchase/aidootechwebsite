import type { MetadataRoute } from "next";

/** Written out at build time so the static export can serve robots.txt. */
export const dynamic = "force-static";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
