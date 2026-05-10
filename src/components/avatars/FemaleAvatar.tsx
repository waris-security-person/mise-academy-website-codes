type Props = { hue?: number; className?: string };

export function FemaleAvatar({ hue = 320, className }: Props) {
  const skin = "#f3c6a5";
  const hair = `hsl(${hue}, 55%, 28%)`;
  const top = `hsl(${hue}, 70%, 55%)`;
  const bg = `hsl(${hue}, 60%, 92%)`;
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill={bg} />
      {/* Hair back */}
      <path d="M28 70c0-22 14-42 32-42s32 20 32 42v18H28V70z" fill={hair} />
      {/* Neck */}
      <rect x="52" y="76" width="16" height="14" rx="4" fill={skin} />
      {/* Face */}
      <ellipse cx="60" cy="58" rx="22" ry="26" fill={skin} />
      {/* Hair fringe */}
      <path d="M38 50c4-14 18-22 22-22s18 8 22 22c-8-6-14-8-22-8s-14 2-22 8z" fill={hair} />
      {/* Eyes */}
      <circle cx="51" cy="60" r="2.2" fill="#2b2b2b" />
      <circle cx="69" cy="60" r="2.2" fill="#2b2b2b" />
      {/* Smile */}
      <path d="M53 70c2 3 5 4 7 4s5-1 7-4" stroke="#7a3a3a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Earrings */}
      <circle cx="38" cy="64" r="1.6" fill="#e6b800" />
      <circle cx="82" cy="64" r="1.6" fill="#e6b800" />
      {/* Shirt */}
      <path d="M22 110c4-12 18-20 38-20s34 8 38 20H22z" fill={top} />
    </svg>
  );
}
