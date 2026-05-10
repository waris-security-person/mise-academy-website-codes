import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { WhyUs } from "@/components/home/WhyUs";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mise Academy — Home" },
      { name: "description", content: "Mentor-led cohorts in AWS, Kubernetes, DevOps and Python. Real labs. Real jobs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
