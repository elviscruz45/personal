import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.codewithelvis.dev/", // Absolute URL
    },
  ];
}
