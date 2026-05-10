import { Rocket, Users, Briefcase, ShieldCheck } from "lucide-react";

const items = [
  { icon: Rocket, title: "Real projects", desc: "Ship production-grade pipelines, clusters and APIs — not toy demos." },
  { icon: Users, title: "Live mentorship", desc: "Weekly live sessions with senior engineers from top tech companies." },
  { icon: Briefcase, title: "Career support", desc: "Resume review, mock interviews, and direct hiring partner referrals." },
  { icon: ShieldCheck, title: "Lifetime access", desc: "Course updates, community Slack and labs — yours forever." },
];

export function WhyUs() {
  return (
    <section className="bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Why Mise Academy</h2>
          <p className="mt-2 text-muted-foreground">
            We obsess over outcomes. Every cohort ends with a portfolio you can defend in any interview.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
