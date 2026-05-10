import { Briefcase, MapPin, Clock } from "lucide-react";
import type { Job } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-medium text-primary">{job.company}</div>
          <h3 className="mt-1 font-semibold">{job.role}</h3>
        </div>
        <Badge variant="secondary">{job.type}</Badge>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.experience}</span>
        <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.salary}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((t) => (
          <span key={t} className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs">
            {t}
          </span>
        ))}
      </div>
      <Button className="mt-5 w-full bg-gradient-primary text-primary-foreground hover:opacity-95">
        Apply now
      </Button>
    </article>
  );
}
