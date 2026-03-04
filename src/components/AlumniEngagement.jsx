import React from "react";
import { motion } from "framer-motion";
import "../styles/alumni_engagement.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

function AlumniEngagement() {
  return (
    <motion.section
      className="alumni-engagement position-relative py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background wave */}
      <div className="wave-bg"></div>

      <div className="container position-relative text-center text-lg-start">
        
        {/* Main Title */}
        <motion.h2 className="section-title mb-4" variants={fadeUp}>
          STAY CONNECTED AND MAKE AN IMPACT
        </motion.h2>

        <motion.p
          className="lead text-muted mb-5 engagement-description text-center"
          variants={fadeUp}
        >
          Once a member, always part of the AKUMS family. Reconnect, mentor, and give back — 
          together we shape the future of medicine.
        </motion.p>

        {/* Get Involved CTA */}
        <motion.div
          className="mb-4 text-center text-lg-start"
          variants={fadeUp}
        >
          <motion.a
            href="/alumni-participate"
            className="btn btn-primary btn-lg rounded-pill shadow-sm engagement-main-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-hand-index-thumb me-2"></i>
            Get Involved
          </motion.a>
        </motion.div>

        {/* Split Engagement Sections */}
        <motion.div
          className="engagement-split d-flex flex-column flex-lg-row align-items-stretch gap-4"
          variants={containerVariants}
        >
          
          {/* Mentorship */}
          <motion.div
            className="split-section mentorship position-relative p-5 text-white"
            variants={fadeUp}
            whileHover={{ y: -12, scale: 1.03 }}
          >
            <motion.div
              className="icon-bg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <i className="bi bi-person-lines-fill display-3"></i>
            </motion.div>

            <h3 className="mt-4">Mentorship</h3>
            <p>
              Guide medical students through internships, career decisions, leadership, 
              and the realities of professional practice. Be the mentor who shapes tomorrow.
            </p>
          </motion.div>

          {/* Giving Back */}
          <motion.div
            className="split-section giving position-relative p-5 text-white"
            variants={fadeUp}
            whileHover={{ y: -12, scale: 1.03 }}
          >
            <motion.div
              className="icon-bg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <i className="bi bi-heart-fill display-3"></i>
            </motion.div>

            <h3 className="mt-4">Giving Back</h3>
            <p>
              Support AKUMS through scholarships, sponsorships, and collaborative initiatives. 
              Your contributions help empower the next generation of medical leaders.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}

export default AlumniEngagement;