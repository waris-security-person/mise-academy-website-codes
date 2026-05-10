import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12400, suffix: "+", display: (n: number) => n.toLocaleString("en-US"), label: "Active learners" },
  { value: 40, suffix: "+", display: (n: number) => n.toString(), label: "Industry mentors" },
  { value: 120, suffix: "+", display: (n: number) => n.toString(), label: "Live projects" },
  { value: 88, suffix: "%", display: (n: number) => n.toString(), label: "Placement rate" },
];

function Counter({ target, suffix, format }: { target: number; suffix: string; format: (n: number) => string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(Math.floor(eased * target));
            if (t < 1) requestAnimationFrame(tick);
            else setN(target);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{format(n)}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-surface/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-bold sm:text-4xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                <Counter target={s.value} suffix={s.suffix} format={s.display} />
              </span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
