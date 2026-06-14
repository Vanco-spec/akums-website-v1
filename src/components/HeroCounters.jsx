import React, { useEffect, useRef, useState } from 'react';

function Counter({ end = 0, label = '', duration = 1500, suffix = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    let observer;
    let rafId;
    let started = false;

    function start() {
      if (started) return;
      started = true;
      const startTime = performance.now();
      const from = 0;

      function tick(now) {
        const t = Math.min(1, (now - startTime) / duration);
        const current = Math.floor(from + (end - from) * t);
        setValue(current);
        if (t < 1) rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);
    }

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && start()),
        { threshold: 0.5 }
      );
      if (ref.current) observer.observe(ref.current);
    } else {
      start();
    }

    return () => {
      if (observer && ref.current) observer.unobserve(ref.current);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, duration]);

  return (
    <div ref={ref} className="hero-counter text-center">
      <div className="counter-number">{value}{suffix}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default function HeroCounters() {
  return (
    <div className="hero-counters d-flex gap-4 justify-content-center flex-wrap">
      <Counter end={1200} label="Alumni worldwide" suffix="+" />
      <Counter end={85} label="Countries represented" suffix="" />
      <Counter end={230} label="Medical specialists" suffix="+" />
      <Counter end={540} label="Leadership positions" suffix="+" />
    </div>
  );
}
