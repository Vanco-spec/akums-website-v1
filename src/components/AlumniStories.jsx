import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    title: 'From Campus Clinic to Global Health Leadership',
    quote: 'My AKUMS network connected me to opportunities in five countries and helped me build a care model for underserved communities.',
    author: 'Dr. Miriam Njoroge',
  },
  {
    title: 'Launching medical technology for rural care',
    quote: 'We built a clinical triage app with alumni mentorship, then expanded into a national health initiative.',
    author: 'Mr. Kevin Ouma',
  },
  {
    title: 'A career shaped by mentorship',
    quote: 'Guidance from senior alumni made the difference between a job and a leadership trajectory.',
    author: 'Dr. Liza Wanyama',
  },
];

function AlumniStories() {
  return (
    <motion.section
      className="alumni-stories premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-intro text-center">
          <p className="eyebrow">Alumni Stories</p>
          <h2>Real careers, real change, real inspiration.</h2>
          <p className="section-copy">
            Learn how AKUMS alumni turned experience, mentorship, and community into professional impact.
          </p>
        </div>

        <div className="story-grid">
          {stories.map((story, idx) => (
            <motion.article
              key={story.title}
              className="story-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="story-number">0{idx + 1}</div>
              <h3>{story.title}</h3>
              <p className="story-quote">“{story.quote}”</p>
              <p className="story-author">{story.author}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniStories;
