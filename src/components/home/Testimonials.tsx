import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { StudentAvatar } from "@/components/avatars/StudentAvatar";

export function Testimonials() {
  return (
    <section className="bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our students</h2>
          <p className="mt-2 text-muted-foreground">
            Real graduates, real outcomes — here's what they say after shipping with us.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-border bg-gradient-card p-6 shadow-card"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <div className="flex items-center gap-4">
                <StudentAvatar name={t.name} className="h-14 w-14 rounded-full ring-2 ring-primary/20" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-highlight text-highlight" : "text-muted"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
