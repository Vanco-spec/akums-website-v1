import React from 'react';
import { motion } from 'framer-motion';

function AlumniCommunityLegacy() {
  return (
    <motion.section
      className="alumni-community premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-intro text-center">
          <p className="eyebrow">Global Alumni Community</p>
          <h2>Our reach stretches across continents, collaborations, and causes.</h2>
          <p className="section-copy">
            Discover a global alumni ecosystem built on regional chapters,
            international partnerships, and lasting professional relationships.
          </p>
        </div>

        <div className="community-grid">
          <motion.div className="community-map glass-panel" whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
            <div className="map-overlay">
              <span className="map-pin" style={{ top: '22%', left: '18%' }} />
              <span className="map-pin" style={{ top: '42%', left: '45%' }} />
              <span className="map-pin" style={{ top: '60%', left: '72%' }} />
              <span className="map-pin" style={{ top: '28%', left: '78%' }} />
            </div>
          </motion.div>

          <div className="community-side">
            <motion.div className="community-card" whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
              <p className="eyebrow">Giving Back</p>
              <h3>Leave a legacy with mentorship, sponsorship, and service.</h3>
              <p>Engage in programs that uplift students, support scholarships, and drive social impact.</p>
              <a href="#apply" className="card-link">Support alumni initiatives</a>
            </motion.div>

            <motion.div className="community-card" whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
              <p className="eyebrow">Events & Reunions</p>
              <h3>Premium gatherings for networking, learning, and celebration.</h3>
              <p>Attend chapter meetups, conferences, and reunion experiences crafted for professionals.</p>
              <a href="#events" className="card-link">See upcoming events</a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniCommunityLegacy;
