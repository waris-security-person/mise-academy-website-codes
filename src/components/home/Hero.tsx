import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/BrandIcon";

const orbitIcons = [
  { slug: "amazonwebservices", color: "#FF9900" },
  { slug: "docker", color: "#2496ED" },
  { slug: "kubernetes", color: "#326CE5" },
  { slug: "jenkins", color: "#D33833" },
  { slug: "terraform", color: "#7B42BC" },
  { slug: "ansible", color: "#EE0000" },
];

export function Hero() {
  const current = orbitIcons[0];
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-2 md:pt-24">
        <div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build a{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              cloud-ready
            </span>{" "}
            tech career.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Mise Academy trains the next generation of Cloud, DevOps and Software Engineers
            through hands-on labs, mentor-led cohorts and a career portal that opens real doors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95">
              <Link to="/courses">
                Browse courses <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                <PlayCircle className="mr-1 h-4 w-4" /> Talk to mentor
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl font-bold text-foreground">12k+</span> learners</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="font-display text-2xl font-bold text-foreground">4.9★</span> avg rating</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="font-display text-2xl font-bold text-foreground">88%</span> placed</div>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-40 w-40 place-items-center rounded-full bg-gradient-primary shadow-glow">
              <div className="grid h-24 w-24 place-items-center rounded-2xl bg-background/95 shadow-card overflow-hidden">
                <BrandIcon slug={current.slug} color={current.color} size={64} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0">
            {orbitIcons.map((ic, i) => {
              const angle = (i / orbitIcons.length) * Math.PI * 2;
              const r = 170;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <div
                  key={ic.slug}
                  className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-border bg-surface shadow-card"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <BrandIcon slug={ic.slug} color={ic.color} size={32} />
                </div>
              );
            })}
          </div>
          <div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-border/60" />
        </div>
      </div>
    </section>
  );
}
