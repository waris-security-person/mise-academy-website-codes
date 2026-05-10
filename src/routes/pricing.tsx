import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Mise Academy" },
      { name: "description", content: "Choose the learning plan that fits your schedule and goals." },
      { property: "og:title", content: "Pricing — Mise Academy" },
      { property: "og:description", content: "Free, Guided Live, and Self-paced learning plans." },
    ],
  }),
  component: PricingPage,
});

type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: { label: string; included: boolean }[];
  cta: string;
  href: string;
  highlighted?: boolean;
  icon: typeof Sparkles;
  accent: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Learn at your own pace with recorded sessions.",
    price: "Rs 0",
    period: "/month",
    icon: Sparkles,
    accent: "from-sky-400 to-cyan-400",
    features: [
      { label: "Learn any time anywhere", included: true },
      { label: "Some demo videos", included: true },
      { label: "Community Support", included: false },
      { label: "Career Guidance", included: false },
      { label: "Hands on labs", included: false },
    ],
    cta: "Watch",
    href: "https://miseacademy.com/course/Free_course/free_course.html",
  },
  {
    name: "Guided Learning (Live)",
    tagline: "Interactive live sessions with expert instructors.",
    price: "Rs 3500",
    period: "/month",
    icon: Crown,
    accent: "from-primary to-accent",
    highlighted: true,
    features: [
      { label: "Daily live classes (pre-recorded)", included: true },
      { label: "Live Q&A after class", included: true },
      { label: "AI-powered lab environment", included: true },
      { label: "Community support", included: true },
      { label: "Unpaid internship", included: true },
      { label: "AWS Cloud Account", included: true },
    ],
    cta: "Register",
    href: "https://mise-academy-8c4fe.firebaseapp.com/__/auth/handler?apiKey=AIzaSyC-5CdKTfwkzFSdlwsv61LPlQqHNx_Soe8&appName=%5BDEFAULT%5D&authType=signInViaRedirect&redirectUrl=https%3A%2F%2Fmiseacademy.com%2Fnew-pricing%2Fnew-pricing.html&v=12.4.0&providerId=google.com&customParameters=%7B%22prompt%22%3A%22select_account%22%7D&scopes=profile",
  },
  {
    name: "Self Learning (Recorded)",
    tagline: "Learn at your own pace with recorded sessions.",
    price: "Rs 2500",
    period: "/month",
    icon: Zap,
    accent: "from-amber-400 to-orange-500",
    features: [
      { label: "Full course access", included: true },
      { label: "Learn anytime, anywhere", included: true },
      { label: "AI-powered lab environment", included: true },
      { label: "Community Support", included: true },
      { label: "Career Guidance", included: true },
      { label: "Hands on labs", included: true },
    ],
    cta: "Register",
    href: "https://mise-academy-8c4fe.firebaseapp.com/__/auth/handler?apiKey=AIzaSyC-5CdKTfwkzFSdlwsv61LPlQqHNx_Soe8&appName=%5BDEFAULT%5D&authType=signInViaRedirect&redirectUrl=https%3A%2F%2Fmiseacademy.com%2Fnew-pricing%2Fnew-pricing.html&v=12.4.0&providerId=google.com&customParameters=%7B%22prompt%22%3A%22select_account%22%7D&scopes=profile",
  },
];

function PricingPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Choose Your Plan
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            Pricing{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Plans
            </span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Select the best learning plan that suits your schedule.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                  p.highlighted
                    ? "border-primary/40 bg-gradient-card shadow-elegant md:scale-105"
                    : "border-border bg-gradient-card shadow-card hover:shadow-elegant"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-elegant">
                    Most Popular
                  </span>
                )}
                <div
                  className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-elegant`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 min-h-[3rem] text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2">
                      {f.included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground/60 line-through"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 ${
                    p.highlighted ? "bg-gradient-primary text-primary-foreground shadow-elegant" : ""
                  }`}
                  variant={p.highlighted ? "default" : "outline"}
                >
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.cta}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
