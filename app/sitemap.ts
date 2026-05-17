import type { MetadataRoute } from "next";
import { cases } from "@/data/cases";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://www.kairosdetectives.com";

  const caseUrls = cases.map((item) => ({
    url: `${baseUrl}/it/cases/${item.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${baseUrl}/it`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/it/about`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/it/contact`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/it/how-it-works`,
      lastModified: new Date(),
    },

    ...caseUrls,
  ];
}