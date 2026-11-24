import type { MetadataRoute } from "next";
import { SUBJECT } from "@/lib/subject";

// Web app manifest: makes the IB Diploma subject hub installable on iPad ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: SUBJECT.fullName,
    short_name: SUBJECT.shortTitle,
    description: `${SUBJECT.fullName} — discovery lessons, IB examiner mark-savers, interactive labs, skill drills, mock papers and IA guidance.`,
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: SUBJECT.themeColorLight,
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
