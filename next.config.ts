import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Built as a fully static site for DigitalOcean App Platform's Static Site
   * component. `next build` writes plain HTML, CSS, JS and images to `out/`,
   * which is what DigitalOcean serves — there is no Node server at runtime.
   */
  output: "export",

  /**
   * Static hosts serve files, not routes. With trailing slashes every page is
   * exported as `<route>/index.html`, which any static host resolves without
   * extra rewrite rules.
   */
  trailingSlash: true,

  /**
   * next/image optimises on demand from a server, which a static export does
   * not have. The images in `public/` are already cropped and converted to
   * WebP at sensible sizes, so they are served as-is.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
