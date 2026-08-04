import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { MvxAcademyLogo } from "./MvxAcademyLogo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/subscriptions", label: "Subscriptions" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass hairline-b" : "bg-transparent"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <MvxAcademyLogo className="h-9 w-9 rounded-full transition-transform duration-500 group-hover:scale-105" />
          <span className="font-display text-xs tracking-[0.25em] uppercase opacity-90">MVX Shop</span>
        </Link>

        {/* Hamburger-Menü oben rechts (ist die einzige Navigation - wie gewünscht) */}
        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="hairline-t">
          <nav className="container-xl flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-2xl font-display tracking-[0.06em] uppercase">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
