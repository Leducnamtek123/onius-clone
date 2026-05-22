import { stripLocale } from "@/i18n";

export type RouteGate = {
  path: string;
  title: string;
  copy: string;
};

export const routeGates: RouteGate[] = [
  {
    path: "/",
    title: "Dashboard",
    copy: "The customer demo starts here. The rest of the catalog will open as each release wave is approved.",
  },
  {
    path: "/2026",
    title: "2026",
    copy: "This page is not part of the customer demo yet.",
  },
  {
    path: "/new",
    title: "New",
    copy: "This page is not part of the customer demo yet.",
  },
  {
    path: "/products",
    title: "Products",
    copy: "The product listing will be released after the dashboard preview is approved.",
  },
  {
    path: "/products/:slug",
    title: "Product detail",
    copy: "Product detail templates will be shown in a later release wave.",
  },
  {
    path: "/search",
    title: "Search",
    copy: "Search is still locked for the customer demo.",
  },
  {
    path: "/compare",
    title: "Compare",
    copy: "Compare tools are still locked for the customer demo.",
  },
  {
    path: "/images",
    title: "Images",
    copy: "The asset library is still locked for the customer demo.",
  },
  {
    path: "/projects",
    title: "Projects",
    copy: "Project listing and detail pages are not in the customer demo yet.",
  },
  {
    path: "/stories",
    title: "Stories",
    copy: "Stories content will be added in a later release wave.",
  },
  {
    path: "/stories/all",
    title: "All stories",
    copy: "The full story archive is not open in the customer demo yet.",
  },
  {
    path: "/resources",
    title: "Resources",
    copy: "Resource downloads are still locked for the customer demo.",
  },
  {
    path: "/brand/about",
    title: "About Cosmos",
    copy: "Brand detail pages are not part of the customer demo yet.",
  },
  {
    path: "/brand/our-culture",
    title: "Our Culture",
    copy: "Brand detail pages are not part of the customer demo yet.",
  },
  {
    path: "/brand/sustainability",
    title: "Sustainability",
    copy: "Brand detail pages are not part of the customer demo yet.",
  },
  {
    path: "/brand/why-cosmos",
    title: "Why Cosmos",
    copy: "The brand explanation page will open in a later release wave.",
  },
  {
    path: "/contact",
    title: "Contact",
    copy: "Contact forms are still locked for the customer demo.",
  },
  {
    path: "/where-to-buy",
    title: "Where to buy",
    copy: "Dealer and showroom pages are still locked for the customer demo.",
  },
  {
    path: "/toolbox",
    title: "Toolbox",
    copy: "Toolbox access is still locked for the customer demo.",
  },
  {
    path: "/applications/:type",
    title: "Applications",
    copy: "Application-specific pages are not in the customer demo yet.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy policy",
    copy: "Privacy policy content is still locked for the customer demo.",
  },
];

export type ReleaseMode = "full" | "customer-demo";

export function getReleaseMode(): ReleaseMode {
  return import.meta.env.VITE_RELEASE_MODE === "customer-demo" ? "customer-demo" : "full";
}

export function normalizeRoutePath(path: string) {
  return stripLocale(path);
}

export function isRouteOpenInRelease(path: string, releaseMode: ReleaseMode) {
  if (releaseMode === "full") return true;
  return normalizeRoutePath(path) === "/";
}
