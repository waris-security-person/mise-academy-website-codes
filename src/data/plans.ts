export type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  href: string;
};

export const plans: Plan[] = [
  {
    name: "Start Free Trial",
    price: "Free",
    tagline: "Try before you commit",
    features: [
      "Access to a full free course",
      "Hands-on intro labs",
      "Community Slack access",
      "No credit card required",
    ],
    cta: "Start Free Trial",
    href: "https://miseacademy.com/course/Free_course/free_course.html",
  },
  {
    name: "Register Now",
    price: "Career-ready",
    tagline: "Most popular",
    features: [
      "Full access to all courses",
      "Live mentor-led cohorts",
      "Hands-on cloud & DevOps labs",
      "Resume, LinkedIn & interview prep",
      "Job portal & placement support",
    ],
    highlighted: true,
    cta: "Register Now",
    href: "https://miseacademy.com/new-pricing/new-pricing.html",
  },
];
