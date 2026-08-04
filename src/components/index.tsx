import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MvxEsportsLogo } from "@/components/MvxEsportsLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MVX Shop — MVX Esports" },
      { name: "description", content: "Training packs, subscriptions, and academy programmes from MVX Esports." },
    ],
  }),
  component: ShopIndexPage,
});

function ShopIndexPage() {
  return (
    <section className="container-xl pt-24 pb-32 md:pt-36 md:pb-40 text-center">
      <Reveal>
        <div className="flex justify-center">
          <MvxEsportsLogo className="h-20 w-20 md:h-24 md:w-24 rounded-full shadow-[0_30px_120px_-30px_rgba(255,255,255,0.25)]" />
        </div>
      </Reveal>

      <Reveal delay={120}>
        <h1 className="mt-10 text-display-lg uppercase">MVX Shop.</h1>
      </Reveal>

      <Reveal delay={220}>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Training packs and subscriptions from MVX Esports and MVX Academy.
        </p>
      </Reveal>

      <Reveal delay={320}>
        <Link
          to="/subscriptions"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
        >
          View subscriptions
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </Reveal>
    </section>
  );
}
