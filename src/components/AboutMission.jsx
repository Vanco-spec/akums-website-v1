import React, { useRef, useEffect, useState } from "react";
import "../styles/about_mission.css";

const AboutMission = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`mission-vision py-5 ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container text-center">

        <h2 className="section-title mb-4 text-center">
          OUR MISSION, VISION & CORE VALUES
        </h2>

        <p className="intro-text mb-5">
          Guided by passion, purpose, and professionalism — AKUMS strives to
          shape the next generation of healthcare leaders in Kenya and beyond.
        </p>

        <div className="row gy-5 align-items-stretch">

          {/* ================= MISSION ================= */}
          <div className="col-md-4">
            <div className="mv-block mission">
              <div className="mv-icon">
                <i className="bi bi-bullseye"></i>
              </div>

              <h4 className="mv-heading">Our Mission</h4>

              <p>
                To empower medical students to become competent, ethical, and
                compassionate healthcare professionals through leadership,
                service, and collaboration.
              </p>
            </div>
          </div>

          {/* ================= VISION ================= */}
          <div className="col-md-4">
            <div className="mv-block vision">
              <div className="mv-icon">
                <i className="bi bi-eye"></i>
              </div>

              <h4 className="mv-heading">Our Vision</h4>

              <p>
                To be a leading medical student body that influences the future
                of healthcare through innovation, advocacy, and service to
                humanity.
              </p>
            </div>
          </div>

          {/* ================= CORE VALUES ================= */}
          <div className="col-md-4">
            <div className="mv-block values">
              <div className="mv-icon">
                <i className="bi bi-gem"></i>
              </div>

              <h4 className="mv-heading">Our Core Values</h4>

              <ul className="mv-heading mt-3">
                <li>Integrity</li>
                <li>Service to Humanity</li>
                <li>Excellence</li>
                <li>Inclusivity</li>
                <li>Professionalism</li>
                <li>Innovation</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;