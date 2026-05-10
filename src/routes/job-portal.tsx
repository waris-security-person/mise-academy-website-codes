import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ROLE_PRESETS = [
  "DevOps Engineer",
  "Cloud Engineer",
  "AWS",
  "Kubernetes",
  "Site Reliability Engineer",
];

function LiveJobSearch() {
  const [role, setRole] = useState("DevOps Engineer");

  const linkedinUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&f_TPR=r604800`;
  const indeedUrl = `https://www.indeed.com/jobs?q=${encodeURIComponent(role)}&fromage=7`;

  return (
    <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-5 shadow-card backdrop-blur">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">Live search · last 7 days:</span>
        {ROLE_PRESETS.map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              role === r
                ? "border-primary bg-gradient-primary text-primary-foreground"
                : "border-border hover:border-primary/40"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role or keyword (e.g. AWS, SRE)"
          className="flex-1"
        />
        <Button asChild className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-1 h-4 w-4" /> LinkedIn jobs <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={indeedUrl} target="_blank" rel="noopener noreferrer">
            Indeed jobs <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Opens a real-time, last-7-days search on LinkedIn / Indeed for the selected role.
      </p>
    </div>
  );
}

export const Route = createFileRoute("/job-portal")({
  head: () => ({
    meta: [
      { title: "Job Portal — Mise Academy" },
      { name: "description", content: "Live last-7-days job search on LinkedIn and Indeed for Mise Academy graduates." },
      { property: "og:title", content: "Job Portal — Mise Academy" },
    ],
  }),
  component: JobsPage,
});

function JobsPage() {
  return (
    <section className="bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Job portal</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Search live openings posted in the last 7 days on LinkedIn and Indeed for any cloud,
          DevOps or SRE role you want.
        </p>
        <LiveJobSearch />
      </div>
    </section>
  );
}

