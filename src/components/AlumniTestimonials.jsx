import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Grace Njenga',
    role: 'Cardiologist',
    message: 'AKUMS helped me build a network that opens doors to collaborative research and leadership roles.',
  },
  {
    name: 'Juan Karanja',
    role: 'Public Health Advocate',
    message: 'The mentorship program redefined my career path and connected me to alumni around the world.',
  },
  {
    name: 'Prof. Rosalind Atieno',
    role: 'Academic Director',
    message: 'Belonging to AKUMS means belonging to a community that values excellence and impact.',
  },
];

function AlumniTestimonials() {
  return (
    <motion.section
      className="alumni-testimonials premium-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-intro text-center">
          <p className="eyebrow">Testimonials</p>
          <h2>Trusted voices from across the AKUMS community.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              className="testimonial-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="testimonial-text">“{item.message}”</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniTestimonials;
