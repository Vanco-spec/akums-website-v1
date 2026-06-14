import React from 'react';
import { motion } from 'framer-motion';

function AlumniFinalCta() {
  return (
    <motion.section
      className="alumni-final-cta premium-section text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <p className="eyebrow">Join the Legacy</p>
        <h2>Be part of a global medical network built on leadership and impact.</h2>
        <p className="section-copy mx-auto" style={{ maxWidth: '680px' }}>
          Update your profile, become a mentor, attend events, and connect with a community that turns ambition into achievement.
        </p>
        <div className="final-cta-actions d-flex justify-content-center gap-3 flex-wrap">
          <a href="#apply" className="btn btn-primary btn-lg rounded-pill">Become a Member</a>
          <a href="#coming" className="btn btn-outline-primary btn-lg rounded-pill">See What's Coming</a>
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniFinalCta;
