// Tiny heuristic: explicit map first, then suffix-based guess.
const FEMALE = new Set([
  "priya", "aisha", "sneha", "ananya", "neha", "pooja", "kavya", "shreya",
  "isha", "diya", "meera", "ritu", "swati", "tanvi", "nidhi", "rhea",
  "fatima", "sara", "emma", "olivia", "ava", "sophia", "mia", "lily",
]);
const MALE = new Set([
  "rahul", "arjun", "vikram", "rohan", "amit", "ravi", "kunal", "ankit",
  "sahil", "raj", "karan", "siddharth", "akash", "deepak", "manish",
  "john", "michael", "david", "james", "robert", "william", "alex",
]);

export type Gender = "female" | "male";

export function genderFromName(fullName: string): Gender {
  const first = fullName.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  if (FEMALE.has(first)) return "female";
  if (MALE.has(first)) return "male";
  // Heuristic fallback: many female names end in 'a', 'i', 'ya'
  if (/(a|i|ya|ie|elle)$/.test(first)) return "female";
  return "male";
}

// Deterministic hue from name for subtle avatar color variation.
export function hueFromName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}
