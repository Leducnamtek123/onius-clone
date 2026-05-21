import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import New2026 from "@/pages/New2026";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import SearchPage from "@/pages/SearchPage";
import ComparePage from "@/pages/ComparePage";
import ImagesPage from "@/pages/ImagesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import StoriesPage from "@/pages/StoriesPage";
import StoriesAllPage from "@/pages/StoriesAllPage";
import ResourcesPage from "@/pages/ResourcesPage";
import BrandAboutPage from "@/pages/brand/BrandAboutPage";
import BrandCulturePage from "@/pages/brand/BrandCulturePage";
import BrandSustainabilityPage from "@/pages/brand/BrandSustainabilityPage";
import BrandWhyUniosPage from "@/pages/brand/BrandWhyUniosPage";
import ContactPage from "@/pages/ContactPage";
import WhereToBuyPage from "@/pages/WhereToBuyPage";
import ToolboxPage from "@/pages/ToolboxPage";
import ApplicationsPage from "@/pages/ApplicationsPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

const queryClient = new QueryClient();

const routes = [
  { path: "/", component: Home },
  { path: "/2026", component: New2026 },
  { path: "/new", component: New2026 },
  { path: "/products/:slug", component: ProductDetailPage },
  { path: "/products", component: ProductsPage },
  { path: "/search", component: SearchPage },
  { path: "/compare", component: ComparePage },
  { path: "/images", component: ImagesPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/stories", component: StoriesPage },
  { path: "/stories/all", component: StoriesAllPage },
  { path: "/resources", component: ResourcesPage },
  { path: "/brand/about", component: BrandAboutPage },
  { path: "/brand/our-culture", component: BrandCulturePage },
  { path: "/brand/sustainability", component: BrandSustainabilityPage },
  { path: "/brand/why-unios", component: BrandWhyUniosPage },
  { path: "/contact", component: ContactPage },
  { path: "/where-to-buy", component: WhereToBuyPage },
  { path: "/toolbox", component: ToolboxPage },
  { path: "/applications/:type", component: ApplicationsPage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
] as const;

function Router() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
      {routes.map((route) => (
        <Route key={`/vi${route.path}`} path={`/vi${route.path === "/" ? "" : route.path}`} component={route.component} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
