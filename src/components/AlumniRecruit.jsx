import React from "react";
import { motion } from "framer-motion";
import "../styles/alumni_recruit.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function AlumniRecruit() {
  return (
    <motion.section
      className="alumni-recruit"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >

      {/* ===== HERO ===== */}
      <motion.div className="recruit-hero text-center" variants={fadeUp}>
        <div className="container">
          <motion.h1 className="recruit-title" variants={fadeUp}>
            Become an Active AKUMS Alumni Leader
          </motion.h1>

          <motion.p className="recruit-subtitle" variants={fadeUp}>
            Continue your legacy. Mentor, guide, and shape the next generation 
            of medical professionals.
          </motion.p>

          <motion.a
            href="#apply"
            className="btn btn-primary btn-lg rounded-pill recruit-main-btn"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="bi bi-person-check-fill me-2"></i>
            Join as Active Alumni
          </motion.a>
        </div>
      </motion.div>

      {/* ===== WHY SECTION ===== */}
      <motion.div className="recruit-why py-5" variants={fadeUp}>
        <div className="container text-center">
          <motion.h2 className="section-heading mb-4" variants={fadeUp}>
            Why Become Active?
          </motion.h2>

          <motion.p className="why-description mx-auto" variants={fadeUp}>
            Active alumni play a crucial role in mentorship programs, 
            leadership advisory, academic collaborations, and institutional growth. 
            Your experience and expertise can directly influence student success 
            and strengthen the AKUMS network globally.
          </motion.p>
        </div>
      </motion.div>

      {/* ===== ROLES SECTION ===== */}
      <motion.div className="recruit-roles py-5" variants={fadeUp}>
        <div className="container">
          <motion.h2
            className="section-heading text-center mb-5"
            variants={fadeUp}
          >
            Ways You Can Contribute
          </motion.h2>

          <motion.div
            className="roles-grid"
            variants={containerVariants}
          >

            {[
              {
                icon: "bi-person-lines-fill",
                title: "Mentorship",
                text: "Guide students in career decisions, postgraduate pathways, internships, and professional development."
              },
              {
                icon: "bi-mic-fill",
                title: "Guest Speaker",
                text: "Share your journey and expertise through seminars, webinars, and academic forums."
              },
              {
                icon: "bi-briefcase-fill",
                title: "Career Opportunities",
                text: "Connect students with internships, electives, and professional openings within your network."
              },
              {
                icon: "bi-people-fill",
                title: "Advisory & Leadership",
                text: "Contribute to strategic initiatives and provide guidance in strengthening AKUMS programs."
              }
            ].map((role, index) => (
              <motion.div
                className="role-item"
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="role-icon"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <i className={`bi ${role.icon}`}></i>
                </motion.div>

                <h4>{role.title}</h4>
                <p>{role.text}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </motion.div>

      {/* ===== APPLY SECTION ===== */}
      <motion.div
        id="apply"
        className="recruit-apply text-center py-5"
        variants={fadeUp}
      >
        <div className="container">
          <motion.h2 className="apply-heading mb-3" variants={fadeUp}>
            READY TO MAKE AN IMPACT?
          </motion.h2>

          <motion.p
            className="apply-description mb-4 mx-auto"
            variants={fadeUp}
          >
            Join a network of dedicated alumni committed to supporting
            medical students and advancing excellence in healthcare.
          </motion.p>

          <motion.a
            href="/"
            className="btn btn-outline-primary btn-lg rounded-pill apply-btn"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply - Coming Soon
          </motion.a>
        </div>
      </motion.div>

    </motion.section>
  );
}

export default AlumniRecruit;