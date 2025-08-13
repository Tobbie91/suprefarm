import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, set] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => set(e.isIntersecting), { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Stat({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const d = 900;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / d);
      setN(Math.round(p * (end - start)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-brand-ink">{n.toLocaleString()}</div>
      <div className="text-sm text" </div></div>