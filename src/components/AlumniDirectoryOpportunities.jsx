import React from 'react';
import { motion } from 'framer-motion';

function AlumniDirectoryOpportunities() {
  return (
    <motion.section
      className="alumni-directory premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="directory"
    >
      <div className="container grid-2-col gap-5 align-start">
        <div className="directory-panel glass-panel">
          <p className="eyebrow">Directory Preview</p>
          <h2>Search alumni profiles with a professional directory experience.</h2>
          <p className="section-copy">
            Preview select profiles, specialties, and connections before exploring
            the full directory.
          </p>
          <div className="directory-search">
            <input type="search" placeholder="Search by specialty or name" aria-label="Search alumni directory" />
            <button type="button">Search</button>
          </div>
          <div className="directory-preview-list">
            <div className="directory-item">
              <div>
                <strong>Dr. Eunice Wanjiru</strong>
                <span>Neonatology, UK</span>
              </div>
              <span>Mentor</span>
            </div>
            <div className="directory-item">
              <div>
                <strong>Mr. David Kimani</strong>
                <span>Health Policy, Kenya</span>
              </div>
              <span>Advisor</span>
            </div>
          </div>
        </div>

        <div className="opportunity-panel glass-panel">
          <p className="eyebrow">Opportunities</p>
          <h2>High-impact career, research, and fellowship opportunities.</h2>
          <div className="opportunity-list">
            {[
              { title: 'Global Health Fellowship', tag: 'Fellowship' },
              { title: 'Clinical Research Grant', tag: 'Research' },
              { title: 'Mentor Roundtable', tag: 'Event' },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="opportunity-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>Join a cohort of alumni advancing medical science and leadership.</p>
                </div>
                <span>{item.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniDirectoryOpportunities;
