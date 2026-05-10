export type Job = {
  id: string;
  role: string;
  company: string;
  location: string;
  type: "Full-time" | "Internship" | "Contract";
  experience: string;
  salary: string;
  tags: string[];
};

export const jobs: Job[] = [
  {
    id: "1",
    role: "Junior DevOps Engineer",
    company: "Razorpay",
    location: "Bengaluru, IN",
    type: "Full-time",
    experience: "0-2 yrs",
    salary: "₹8 - 14 LPA",
    tags: ["AWS", "Jenkins", "Docker"],
  },
  {
    id: "2",
    role: "Cloud Support Associate",
    company: "Amazon",
    location: "Hyderabad, IN",
    type: "Full-time",
    experience: "0-1 yrs",
    salary: "₹9 - 12 LPA",
    tags: ["AWS", "Linux", "Networking"],
  },
  {
    id: "3",
    role: "SRE Intern",
    company: "Swiggy",
    location: "Remote",
    type: "Internship",
    experience: "0 yrs",
    salary: "₹40k / month",
    tags: ["Kubernetes", "Prometheus", "Go"],
  },
  {
    id: "4",
    role: "Platform Engineer",
    company: "Freshworks",
    location: "Chennai, IN",
    type: "Full-time",
    experience: "2-4 yrs",
    salary: "₹18 - 28 LPA",
    tags: ["Terraform", "EKS", "ArgoCD"],
  },
  {
    id: "5",
    role: "Backend Developer (Python)",
    company: "Zomato",
    location: "Gurugram, IN",
    type: "Full-time",
    experience: "1-3 yrs",
    salary: "₹12 - 20 LPA",
    tags: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: "6",
    role: "DevOps Contractor",
    company: "Stealth Startup",
    location: "Remote",
    type: "Contract",
    experience: "3+ yrs",
    salary: "$60 / hr",
    tags: ["AWS", "Terraform", "CI/CD"],
  },
];
