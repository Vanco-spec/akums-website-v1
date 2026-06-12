import React from "react";
import { motion } from "framer-motion";
import "../styles/alumni_hero.css";

function AlumniHero() {
  return (
    <motion.section
      className="alumni-hero position-relative overflow-hidden text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      
      {/* Background pattern */}
      <div className="alumni-pattern"></div>

      <div className="container alumni-content text-center">

        {/* Icon Animation */}
        <motion.div
          className="alumni-icon mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <i className="bi bi-mortarboard-fill"></i>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="mb-3 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          Welcome to AKUMS Alumni Network
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="alumni-subtitle mb-4 mx-auto text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false }}
        >
          Connect, engage, and grow with fellow alumni.
          Building lasting relationships and creating opportunities together.
        </motion.p>

      </div>

      {/* Wave Divider */}
      <div className="alumni-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </motion.section>
  );
}

export default AlumniHero;