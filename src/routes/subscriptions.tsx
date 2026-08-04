import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MvxAcademyLogo } from "@/components/MvxAcademyLogo";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/subscriptions")({
  head: () => ({
    meta: [
      { title: "Subscriptions — MVX Shop" },
      {
        name: "description",
        content:
          "Join the MVX Academy Training Pack — train with official Academy players and qualified coaches. Free first try-out, then €14.99/month.",
      },
    ],
  }),
  component: SubscriptionsPage,
});

// Stripe Payment Link für das "Academy Training Pack"-Abo.
// Im Stripe Dashboard anlegen: Product "Academy Training Pack" -> Price
// 14.99 EUR / monatlich, wiederkehrend -> unter "Free trial" 1 Abrechnungszyklus
// kostenlos einstellen -> Payment Link erzeugen -> URL hier eintragen.
// Reiner Link-Redirect, kein eigenes Backend nötig.
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_WITH_YOUR_LINK";

const features = [
  "Training with official MVX Academy Players",
  "Training by Qualified Coaches",
  "Free First Try-Out, then Pay 14.99",
];

function SubscriptionsPage() {
  return (
    <section className="container-xl py-24 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">Subscriptions</p>
        <h1 className="mt-4 text-display-lg uppercase text-center">Choose your pack.</h1>
      </Reveal>

      <Reveal delay={150}>
        <div className="mx-auto mt-16 max-w-lg">
          <div className="relative rounded-3xl border border-white/10 bg-elevated p-8 md:p-10">
            {/* Logo-Bubble oben rechts */}
            <div className="absolute -top-6 -right-6 h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full ring-1 ring-white/15 bg-background shadow-[0_20px_60px_-20px_rgba(255,255,255,0.25)]">
              <MvxAcademyLogo className="h-full w-full" />
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Academy Subscription</p>
            <h2 className="mt-4 font-display text-2xl md:text-3xl uppercase tracking-[0.05em]">
              Academy Training Pack
            </h2>

            <ul className="mt-8 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                  <span className="text-sm md:text-base text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hairline-t pt-8">
              <p className="text-3xl font-display uppercase tracking-[0.03em]">
                €14.99<span className="text-sm text-muted-foreground normal-case tracking-normal">/month</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">First try-out free, cancel anytime.</p>

              <a
                href={STRIPE_PAYMENT_LINK}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background hover:bg-white/90 transition-colors"
              >
                Start free try-out
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
