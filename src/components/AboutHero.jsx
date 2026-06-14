import React from "react";
import "./../styles/about_hero.css";

const AboutHero = () => {
  return (
    <section className="about-hero d-flex align-items-center justify-content-center text-center text-white">

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Decorative glow orbs */}
      <span className="about-orb about-orb-1" aria-hidden></span>
      <span className="about-orb about-orb-2" aria-hidden></span>

      <div className="container position-relative hero-content">
        <span className="about-hero-badge">
          <span className="badge-dot" aria-hidden></span>
          Leadership · Service · Excellence
        </span>

        <h1 className="about-title">ABOUT AKUMS</h1>

        <p className="about-tagline">
          Empowering medical students through leadership, service, and academic excellence.
        </p>

        <a href="#who-we-are" className="btn about-hero-btn">
          Learn More         </a>
      </div>
    </section>
  );
};

export default AboutHero;
