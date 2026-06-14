import React from 'react';
import { motion } from 'framer-motion';

function AlumniNetworkMentor() {
  return (
    <motion.section
      className="alumni-network premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-intro text-center">
          <p className="eyebrow">Networking Hub</p>
          <h2>Connect with mentors, collaborators, and regional chapters.</h2>
          <p className="section-copy">
            Discover specialty-based connections, regional alumni chapters,
            and the professional ecosystem that supports every stage of your career.
          </p>
        </div>

        <div className="network-grid">
          <motion.div
            className="network-panel"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Find your network</h3>
            <p>
              Search alumni by specialty, region, or leadership focus to find
              collaborators and career mentors.
            </p>
            <div className="network-pill-list">
              {['Surgery', 'Public Health', 'Cardiology', 'MedTech', 'Policy'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a className="network-link" href="#directory">Explore chapters</a>
          </motion.div>

          <motion.div
            className="network-panel mentorship-panel"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Mentorship Program</h3>
            <p>
              Connect rising medical professionals with experienced alumni who
              provide career guidance, skill development, and leadership support.
            </p>
            <ul>
              <li>One-on-one mentorship sessions</li>
              <li>Career roundtables and clinics</li>
              <li>Regional mentorship chapters</li>
            </ul>
            <a className="network-link" href="#apply">Become a mentor</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniNetworkMentor;
