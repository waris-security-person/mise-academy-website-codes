export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Cloud Engineer",
    company: "Infosys",
    quote:
      "Mise Academy turned my fundamentals into a real career. The AWS labs felt exactly like work.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "DevOps Engineer",
    company: "Razorpay",
    quote: "The Kubernetes track is gold. I shipped a GitOps pipeline in week three of my new job.",
    rating: 5,
  },
  {
    name: "Aisha Khan",
    role: "SRE",
    company: "Swiggy",
    quote: "Mentors are reachable, projects are realistic, and the community keeps you accountable.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Platform Engineer",
    company: "Freshworks",
    quote: "I went from manual deploys to building a full IaC platform with Terraform and Argo.",
    rating: 4,
  },
  {
    name: "Sneha Iyer",
    role: "Backend Developer",
    company: "Zomato",
    quote: "Python for Engineers is the most practical course I have taken — straight to production.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Cloud Architect",
    company: "TCS",
    quote: "The placement support is real. Two interviews in week one of finishing my cohort.",
    rating: 5,
  },
  {
    name: "Neha Reddy",
    role: "DevOps Intern",
    company: "PhonePe",
    quote: "The CI/CD module gave me confidence to own deployments on day one of my internship.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "Software Engineer",
    company: "Flipkart",
    quote: "Hands-on labs and code reviews from mentors are what made the difference for me.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Cloud Support Engineer",
    company: "AWS",
    quote: "I cleared the AWS SAA right after the cohort. The exam prep mocks were spot on.",
    rating: 5,
  },
  {
    name: "Rohit Nair",
    role: "Site Reliability Engineer",
    company: "Myntra",
    quote: "Observability and incident drills here mirror real production. Huge confidence boost.",
    rating: 4,
  },
  {
    name: "Divya Joshi",
    role: "Full Stack Developer",
    company: "Paytm",
    quote: "Loved the project-first approach. My GitHub finally tells a story recruiters care about.",
    rating: 5,
  },
  {
    name: "Manish Kumar",
    role: "Cloud Engineer",
    company: "Wipro",
    quote: "From zero cloud experience to leading a migration project in six months. Worth every rupee.",
    rating: 5,
  },
];
