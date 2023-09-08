import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://doc.rubric.sh",
      lastModified: new Date(),
    },
    {
      url: "https://doc.rubric.sh/alternatives/docsend",
      lastModified: new Date(),
    },
    {
      url: "https://doc.rubric.sh/alternatives/brieflink",
      lastModified: new Date(),
    },
    {
      url: "https://doc.rubric.sh/alternatives/pandadoc",
      lastModified: new Date(),
    },
    {
      url: "https://doc.rubric.sh/alternatives/google-drive",
      lastModified: new Date(),
    },
    {
      url: "https://doc.rubric.sh/alternatives/pitch",
      lastModified: new Date(),
    },
    {
      url: "https://doc.rubric.sh/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://vc.doc.rubric.sh",
      lastModified: new Date(),
    },
  ];
}
