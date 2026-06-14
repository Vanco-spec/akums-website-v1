import React from 'react';
import { motion } from 'framer-motion';

const successProfiles = [
  {
    name: 'Dr. Aisha Mwangi',
    role: 'Global Health Director',
    highlight: 'Leading a multinational research initiative on infectious disease.',
  },
  {
    name: 'Samuel Otieno',
    role: 'MedTech Founder',
    highlight: 'Built an AI-powered screening tool for rural clinics.',
  },
  {
    name: 'Prof. Lillian Karanja',
    role: 'Research Scholar',
    highlight: 'Published groundbreaking work in transplant medicine.',
  },
];

function AlumniSuccess() {
  return (
    <motion.section
      className="alumni-success premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container grid-2-col gap-5 align-center">
        <div className="success-hero">
          <p className="eyebrow">Success Showcase</p>
          <h2>The alumni achievements that set new standards for medicine.</h2>
          <p className="section-copy">
            From leadership roles in global health to innovative startups and
            groundbreaking research, AKUMS alumni exemplify professional excellence.
          </p>
          <div className="success-stats">
            <div>
              <strong>95%</strong>
              <span>of alumni lead collaborative healthcare projects</span>
            </div>
            <div>
              <strong>7,500+</strong>
              <span>hours of mentorship delivered annually</span>
            </div>
          </div>
        </div>

        <div className="success-card-grid">
          {successProfiles.map((profile, index) => (
            <motion.article
              key={profile.name}
              className="success-card"
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="success-number">0{index + 1}</div>
              <h3>{profile.name}</h3>
              <p className="success-role">{profile.role}</p>
              <p>{profile.highlight}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniSuccess;
