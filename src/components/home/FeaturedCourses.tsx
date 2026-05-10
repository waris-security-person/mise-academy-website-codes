import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

export function FeaturedCourses() {
  const featured = courses;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our Courses</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Curated tracks taught by engineers from Amazon, Razorpay, Swiggy, and more.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link to="/courses">View all courses</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featured.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </section>
  );
}
