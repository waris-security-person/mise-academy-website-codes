import { genderFromName, hueFromName } from "@/lib/gender-from-name";
import { FemaleAvatar } from "./FemaleAvatar";
import { MaleAvatar } from "./MaleAvatar";

export function StudentAvatar({ name, className }: { name: string; className?: string }) {
  const g = genderFromName(name);
  const hue = hueFromName(name);
  return g === "female" ? (
    <FemaleAvatar hue={hue} className={className} />
  ) : (
    <MaleAvatar hue={hue} className={className} />
  );
}
