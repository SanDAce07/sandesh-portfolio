import { useEffect } from "react";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import AboutPage from "@/pages/AboutPage";
import ExperiencePage from "@/pages/ExperiencePage";
import OverviewPage from "@/pages/OverviewPage";
import WorkPage from "@/pages/WorkPage";
import NotFound from "@/pages/not-found";

function SiteRoutes() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <Switch>
        <Route path="/" component={OverviewPage} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFound} />
      </Switch>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <SiteRoutes />
    </WouterRouter>
  );
}
