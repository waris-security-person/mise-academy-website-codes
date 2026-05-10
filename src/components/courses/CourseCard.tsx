import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Clock, Signal, ArrowRight, ShieldCheck, Cloud, Rocket, Activity, Box } from "lucide-react";
import type { Course } from "@/data/courses";
import { BrandIcon } from "@/components/BrandIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const lucideMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  "shield-check": ShieldCheck,
  cloud: Cloud,
  rocket: Rocket,
  activity: Activity,
  box: Box,
};

function CourseIcon({ slug, color }: { slug: string; color: string }) {
  if (slug.startsWith("lucide:")) {
    const Icon = lucideMap[slug.slice(7)] ?? Box;
    return <Icon size={64} color={color} className="relative drop-shadow-md" />;
  }
  return <BrandIcon slug={slug} color={color} size={72} className="relative drop-shadow-md" />;
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card"
    >
      <div
        className="relative flex h-40 items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${course.brandColor}22, ${course.brandColor}05)` }}
      >
        <div
          aria-hidden
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40"
          style={{ background: course.brandColor }}
        />
        <CourseIcon slug={course.iconSlug} color={course.brandColor} />
        <Badge className="absolute left-3 top-3 bg-background/90 text-foreground hover:bg-background">
          {course.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
          <span className="inline-flex items-center gap-1"><Signal className="h-3.5 w-3.5" />{course.level}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>

        <div className="mt-5 flex items-center justify-end">
          <Button
            asChild
            className="bg-gradient-primary text-primary-foreground hover:opacity-95"
          >
            <Link to="/pricing">
              Enroll <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
