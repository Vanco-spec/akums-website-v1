import React from "react";
import { motion } from "framer-motion";
import "../styles/alumni_comingsoon.css";

const comingSoonData = [
  {
    badge: "Launching Soon",
    icon: "bi-people-fill",
    title: "Alumni Leadership & Governance",
    description:
      "Stay tuned for the formation of our alumni council and regional representatives—your leadership is key!",
    progress: 70,
  },
  {
    badge: "In Development",
    icon: "bi-award-fill",
    title: "Alumni Functions & Contributions",
    description:
      "We’ll soon showcase alumni contributions to AKUMS projects, awards, and events—your impact starts here!",
    progress: 50,
  },
  {
    badge: "Exciting Updates",
    icon: "bi-lightbulb-fill",
    title: "Mentorship & Career Growth",
    description:
      "Our mentorship program will connect students with experienced alumni worldwide—join the movement!",
    progress: 85,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function AlumniComingSoon() {
  return (
    <motion.section
      className="coming-soon-section py-5 text-center"
      aria-labelledby="coming-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container">

        {/* Section Title */}
        <motion.h2
          id="coming-title"
          className="section-title mb-3"
          variants={cardVariants}
        >
          COMING SOON
        </motion.h2>

        <motion.p
          className="lead text-muted mb-5"
          variants={cardVariants}
        >
          Exciting developments are on the way! Our AKUMS executive is eagerly
          working to build stronger networks, mentorship programs, and
          leadership initiatives. Get ready to contribute and connect!
        </motion.p>

        <div className="row g-4 justify-content-center">
          {comingSoonData.map((item, index) => (
            <motion.div
              className="col-md-4"
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="coming-card">

                <div className="eagerness-badge">
                  {item.badge}
                </div>

                <motion.i
                  className={`bi ${item.icon} icon`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.i>

                <h5>{item.title}</h5>
                <p>{item.description}</p>

                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                  ></motion.div>
                </div>

                <small className="progress-text">
                  {item.progress}% Complete
                </small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AlumniComingSoon;