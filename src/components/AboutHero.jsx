import React from "react";
import { Link } from "react-router-dom"; // remove if not using router
import "./../styles/about_hero.css";

const AboutHero = () => {
  return (
    <section className="about-hero d-flex align-items-center justify-content-center text-center text-white">
      
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container position-relative hero-content">
        <h1 className="about-title">ABOUT AKUMS</h1>

        <p className="about-tagline">
          Empowering medical students through leadership, service, and academic excellence.
        </p>

        {/* If using React Router */}
        <a
          href="#who-we-are"
          className="btn mt-4 custom-hero-btn"
          style={{
            color: "black",
            backgroundColor: "#fff",
            padding: "0.6rem 1.3rem",
            borderRadius: "10px",
            fontWeight: 500,
            fontSize: "0.95rem",
            transition: "all 0.3s ease",
            marginTop: "50px",
          }}
        >
          <i className="bi me-2"></i> Learn More
        </a>

      </div>
    </section>
  );
};

export default AboutHero;