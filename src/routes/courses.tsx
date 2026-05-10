import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { courses, type Course } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { Pricing } from "@/components/home/Pricing";

const cats = ["All", "Cloud", "DevOps", "Programming"] as const;

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Mise Academy" },
      { name: "description", content: "Browse all Cloud, DevOps and Programming courses at Mise Academy." },
      { property: "og:title", content: "Courses — Mise Academy" },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const list = cat === "All" ? courses : courses.filter((c) => c.category === cat);

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">All courses</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Pick a track and start shipping. Every course includes labs, projects and mentor reviews.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  cat === c
                    ? "border-primary bg-gradient-primary text-primary-foreground shadow-elegant"
                    : "border-border bg-surface hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c: Course) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      <Pricing />
    </>
  );
}
