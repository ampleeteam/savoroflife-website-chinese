import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    rules: {
      userAgent: "*",
      disallow: ["/transform/inquiry", "/book-event-space"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
