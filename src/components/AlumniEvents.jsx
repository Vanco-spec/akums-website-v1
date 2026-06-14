import React from 'react';
import { motion } from 'framer-motion';

const eventCards = [
  {
    title: 'Global Alumni Summit 2026',
    subtitle: 'A virtual conference for leaders in healthcare.',
    date: 'Sept 12, 2026',
  },
  {
    title: 'Regional Chapter Reunions',
    subtitle: 'Local networking events across East Africa.',
    date: 'Oct 2026',
  },
  {
    title: 'Mentor Roundtable Series',
    subtitle: 'Live sessions with senior AKUMS professionals.',
    date: 'Nov 2026',
  },
];

function AlumniEvents() {
  return (
    <motion.section
      className="alumni-events premium-section"
      id="events"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-intro text-center">
          <p className="eyebrow">Events & Reunions</p>
          <h2>Premium gatherings for networking, learning, and celebration.</h2>
          <p className="section-copy">
            Discover upcoming events and reunions designed for alumni growth and lifelong relationships.
          </p>
        </div>

        <div className="event-grid">
          {eventCards.map((event) => (
            <motion.article
              key={event.title}
              className="event-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="event-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.subtitle}</p>
              <a href="#apply" className="event-link">Reserve your spot</a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniEvents;
