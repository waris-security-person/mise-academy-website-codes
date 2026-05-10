import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/data/plans";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Simple plans, serious outcomes</h2>
        <p className="mt-2 text-muted-foreground">Try a free course or register for the full career track.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl border p-7 shadow-card ${
              p.highlighted
                ? "border-primary/40 bg-gradient-card shadow-elegant"
                : "border-border bg-gradient-card"
            }`}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-elegant">
                {p.tagline}
              </span>
            )}
            <div className="text-sm font-medium text-muted-foreground">{p.name}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold">{p.price}</span>
            </div>
            {!p.highlighted && <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>}
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`mt-8 ${p.highlighted ? "bg-gradient-primary text-primary-foreground" : ""}`}
              variant={p.highlighted ? "default" : "outline"}
            >
              <a href={p.href} target="_blank" rel="noopener noreferrer">{p.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
