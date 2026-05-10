type Props = { hue?: number; className?: string };

export function MaleAvatar({ hue = 220, className }: Props) {
  const skin = "#eab592";
  const hair = `hsl(${hue}, 30%, 18%)`;
  const top = `hsl(${hue}, 55%, 42%)`;
  const bg = `hsl(${hue}, 60%, 92%)`;
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill={bg} />
      {/* Neck */}
      <rect x="52" y="76" width="16" height="14" rx="4" fill={skin} />
      {/* Face */}
      <ellipse cx="60" cy="58" rx="20" ry="24" fill={skin} />
      {/* Hair short */}
      <path d="M40 52c0-14 9-24 20-24s20 10 20 24c-6-4-12-6-20-6s-14 2-20 6z" fill={hair} />
      {/* Eyebrows */}
      <rect x="46" y="55" width="8" height="2" rx="1" fill={hair} />
      <rect x="66" y="55" width="8" height="2" rx="1" fill={hair} />
      {/* Eyes */}
      <circle cx="50" cy="61" r="2.2" fill="#2b2b2b" />
      <circle cx="70" cy="61" r="2.2" fill="#2b2b2b" />
      {/* Smile */}
      <path d="M53 71c2 3 5 4 7 4s5-1 7-4" stroke="#5a3522" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Beard hint */}
      <path d="M44 74c4 6 10 9 16 9s12-3 16-9c-4 4-10 6-16 6s-12-2-16-6z" fill={hair} opacity="0.35" />
      {/* Shirt + collar */}
      <path d="M22 110c4-12 18-20 38-20s34 8 38 20H22z" fill={top} />
      <path d="M52 90l8 10 8-10-8-4z" fill="#fff" />
    </svg>
  );
}
