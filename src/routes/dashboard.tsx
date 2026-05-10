import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Award, BookOpen, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { StudentAvatar } from "@/components/avatars/StudentAvatar";
import { BrandIcon } from "@/components/BrandIcon";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Mise Academy" },
      { name: "description", content: "Track your enrolled courses, live sessions and certificates." },
    ],
  }),
  component: DashboardPage,
});

const enrolled = [
  { title: "AWS Cloud Mastery", progress: 72, slug: "amazonwebservices", color: "#FF9900" },
  { title: "Kubernetes in Production", progress: 38, slug: "kubernetes", color: "#326CE5" },
  { title: "Terraform IaC", progress: 91, slug: "terraform", color: "#7B42BC" },
];
const sessions = [
  { title: "Live: Multi-region EKS deploy", when: "Tomorrow · 6:00 PM" },
  { title: "Workshop: Helm chart authoring", when: "Sat · 11:00 AM" },
  { title: "Q&A: Career paths in Cloud", when: "Sun · 5:00 PM" },
];
const certs = [
  { title: "Docker Deep Dive", date: "Apr 2026" },
  { title: "Linux for DevOps", date: "Feb 2026" },
];

function DashboardPage() {
  const name = "Aisha Khan";
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-gradient-card p-6 shadow-card">
        <div className="flex items-center gap-4">
          <StudentAvatar name={name} className="h-16 w-16 rounded-full ring-2 ring-primary/30" />
          <div>
            <div className="text-sm text-muted-foreground">Welcome back,</div>
            <h1 className="font-display text-2xl font-bold">{name}</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Stat icon={BookOpen} label="Courses" value="3" />
          <Stat icon={TrendingUp} label="Avg progress" value="67%" />
          <Stat icon={Award} label="Certificates" value="2" />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-semibold">My courses</h2>
          <div className="mt-4 space-y-4">
            {enrolled.map((c) => (
              <div key={c.title} className="flex items-center gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
                <div
                  className="grid h-14 w-14 place-items-center rounded-xl"
                  style={{ background: `${c.color}1f` }}
                >
                  <BrandIcon slug={c.slug} color={c.color} size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{c.title}</div>
                    <Badge variant="secondary">{c.progress}%</Badge>
                  </div>
                  <Progress value={c.progress} className="mt-2 h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
            <h3 className="font-semibold">Upcoming live sessions</h3>
            <ul className="mt-3 space-y-3">
              {sessions.map((s) => (
                <li key={s.title} className="flex items-start gap-3 text-sm">
                  <CalendarDays className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <div className="font-medium">{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.when}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
            <h3 className="font-semibold">Recent certificates</h3>
            <ul className="mt-3 space-y-3">
              {certs.map((c) => (
                <li key={c.title} className="flex items-start gap-3 text-sm">
                  <Award className="mt-0.5 h-4 w-4 text-highlight" />
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      <Icon className="h-5 w-5 text-primary" />
      <div>
        <div className="font-display text-lg font-bold leading-none">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
