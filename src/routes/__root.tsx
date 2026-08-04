import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  ),
});
