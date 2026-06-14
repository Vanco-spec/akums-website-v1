import React from "react";
import { motion } from "framer-motion";
import "../styles/alumni_hero.css";

function AlumniHero() {
  return (
    <motion.section
      className="alumni-hero position-relative overflow-hidden text-white hero-fullscreen"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="alumni-pattern"></div>
      <div className="hero-orb hero-orb-1" aria-hidden></div>
      <div className="hero-orb hero-orb-2" aria-hidden></div>
      <div className="hero-orb hero-orb-3" aria-hidden></div>

      <div className="container alumni-content text-center">

        <motion.div
          className="hero-badge mb-4"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="hero-badge-dot" aria-hidden></span>
          Alumni Network · Launching Soon
        </motion.div>

        <motion.div
          className="alumni-icon mb-3"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <i className="bi bi-globe2"></i>
        </motion.div>

        <motion.h1
          className="mb-3 hero-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          viewport={{ once: true }}
        >
          AKUMS Alumni — A Global Network of Medical Leaders
        </motion.h1>

        <motion.p
          className="alumni-subtitle mb-4 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          viewport={{ once: true }}
        >
          Join a lifelong community of physicians, researchers, and leaders
          driving medical excellence across the globe.
        </motion.p>

        <motion.div
          className="hero-ctas d-flex justify-content-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#apply" className="btn btn-primary btn-lg rounded-pill hero-cta-primary">
            Become a Member
          </a>
          <a href="#coming" className="btn btn-outline-light btn-lg rounded-pill hero-cta-secondary">
            See What's Coming
          </a>
        </motion.div>

        <div className="scroll-indicator mt-5" aria-hidden>
          <span></span>
        </div>

      </div>

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