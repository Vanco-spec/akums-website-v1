import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function CounterTile({ target, label, suffix = '+' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current || started.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          started.current = true;
          let start = null;
          const duration = 1400;
          const from = 0;

          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const current = Math.floor(from + (target - from) * progress);
            setValue(current);
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="impact-counter-card">
      <div className="counter-value">{value}{suffix}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

const impactCards = [
  {
    title: 'Global Community',
    copy: 'Over 1,200 alumni strengthening healthcare systems across 85 countries.',
    icon: 'bi-globe2',
  },
  {
    title: 'Leadership',
    copy: 'AKUMS graduates hold leadership roles in hospitals, research, and policy.',
    icon: 'bi-briefcase-fill',
  },
  {
    title: 'Scholarly Impact',
    copy: 'Research, publications, and innovation that move medicine forward.',
    icon: 'bi-journal-bookmark-fill',
  },
];

function AlumniImpact() {
  return (
    <motion.section
      className="alumni-impact premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-intro text-center">
          <p className="eyebrow">Alumni Impact</p>
          <h2>Our global reach is measured in purpose and progress.</h2>
          <p className="section-copy">
            AKUMS alumni are changing patient care, shaping medical research, and
            catalyzing community health well beyond campus.
          </p>
        </div>

        <div className="impact-counter-grid">
          <CounterTile target={1200} label="Alumni worldwide" />
          <CounterTile target={85} label="Countries represented" suffix="" />
          <CounterTile target={540} label="Leadership positions" />
          <CounterTile target={230} label="Research collaborations" suffix="+" />
        </div>

        <div className="impact-card-grid">
          {impactCards.map((card) => (
            <motion.article
              key={card.title}
              className="impact-card"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">
                <i className={`bi ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniImpact;
