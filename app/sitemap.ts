import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/support", "/privacy", "/terms"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: "2026-10-25" }));
}
