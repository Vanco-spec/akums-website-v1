import React, { useRef, useEffect, useState } from "react";
import "../styles/about_about.css";

const AboutWhoWeAre = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible so it doesn't re-animate
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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
      id="who-we-are" 
      className={`who-we-are py-6 ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Image Side */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="/images/logo.png"
              alt="AKUMS Logo"
              className="img-fluid rounded-3 who-image mb-4"
            />

            <div className="affiliations d-flex justify-content-center align-items-center gap-4 flex-wrap mt-3">
              
              <a
                href="https://ifmsa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <img
                  src="/images/IFMSA_logo_horizontal_blue.webp"
                  alt="IFMSA Logo"
                  className="affiliate-logo"
                />
              </a>

              <i className="bi bi-link-45deg text-muted fs-3 mx-2"></i>

              <a
                href="https://famsanet.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <img
                  src="/images/famsa-logo.png"
                  alt="FAMSA Logo"
                  className="affiliate-logo"
                />
              </a>

              <i className="bi bi-link-45deg text-muted fs-3 mx-2"></i>

              <a
                href="https://www.msake.org"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <img
                  src="/images/msakelogo.png"
                  alt="MSAKE Logo"
                  className="affiliate-logo"
                />
              </a>
            </div>

            <p className="small text-muted mt-3">
              AKUMS is proudly affiliated with{" "}
              <strong>IFMSA</strong>, <strong>FAMSA</strong>, and{" "}
              <strong>MSAKE</strong>.
            </p>
          </div>

          {/* Text Side */}
          <div className="col-md-6">
            <h2 className="section-title mb-4">WHO WE ARE</h2>

            <p>
              The <strong>Association of Kenyatta University Medical Students (AKUMS)</strong>{" "}
              is the official body representing all medical students within the
              School of Medicine and allied health sciences at{" "}
              <strong>Kenyatta University</strong>. Since its founding in 2008,
              AKUMS has been a pillar of student leadership, academic growth,
              and community service.
            </p>

            <p>
              As a member of the <strong>Medical Students Association of Kenya (MSAKE)</strong>{" "}
              — which itself is part of the{" "}
              <strong>International Federation of Medical Students' Associations (IFMSA)</strong> —
              AKUMS connects its members to a global network of medical students
              advocating for health equity, education, and leadership.
            </p>

            <p>
              Through mentorship, advocacy, and projects,
              AKUMS empowers students to become ethical, skilled, and
              compassionate healthcare professionals who contribute meaningfully
              to society.
            </p>

            <p>
              Beyond the classroom, AKUMS fosters a strong sense of community
              through health outreach programs, sporting events, and cultural
              activities that strengthen collaboration among students. These
              initiatives nurture holistic growth and cultivate the spirit of
              service and unity that defines the future healthcare professionals
              of Kenyatta University.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;