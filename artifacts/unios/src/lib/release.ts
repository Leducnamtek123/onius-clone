export type ReleaseMode = "full" | "customer-demo";

export function getReleaseMode(): ReleaseMode {
  return import.meta.env.VITE_RELEASE_MODE === "customer-demo" ? "customer-demo" : "full";
}

