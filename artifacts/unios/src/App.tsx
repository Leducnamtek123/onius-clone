import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import New2026 from "@/pages/New2026";
import ProductsPage from "@/pages/ProductsPage";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/2026" component={New2026} />
      <Route path="/new" component={New2026} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/compare" component={ComparePage} />
      <Route path="/images" component={ImagesPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/stories" component={StoriesPage} />
      <Route path="/stories/all" component={StoriesAllPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/brand/about" component={BrandAboutPage} />
      <Route path="/brand/our-culture" component={BrandCulturePage} />
      <Route path="/brand/sustainability" component={BrandSustainabilityPage} />
      <Route path="/brand/why-unios" component={BrandWhyUniosPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/where-to-buy" component={WhereToBuyPage} />
      <Route path="/toolbox" component={ToolboxPage} />
      <Route path="/applications/:type" component={ApplicationsPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
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
