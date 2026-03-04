import React, { useRef, useEffect, useState } from "react";
import "../styles/about_sponsor.css";

const sponsors = [
  {
    name: "IFMSA",
    url: "https://ifmsa.org/",
    logo: "/images/IFMSA_logo_horizontal_blue.webp",
    alt: "International Federation of Medical Students' Associations",
  },
  {
    name: "MSAKE",
    url: "https://msake.org",
    logo: "/images/msakelogo.png",
    alt: "Medical Students Association of Kenya",
  },
  {
    name: "KENYATTA UNIVERSITY",
    url: "https://www.ku.ac.ke/",
    logo: "/images/kulogo.png",
    alt: "Kenyatta University",
  },
  {
    name: "KENYA MEDICAL ASSOCIATION",
    url: "https://kma.co.ke/",
    logo: "/images/kma-final-logo.png",
    alt: "Kenya Medical Association",
  },
  {
    name: "KETTA",
    url: "https://t.co/AqjwGiGbnV",
    logo: "/images/Logo-KTTA-3.jpg",
    alt: "Kenya Tissue and Transplant Authority",
  },
  {
    name: "FAMSA",
    url: "https://famsanet.org/",
    logo: "/images/famsa-logo.png",
    alt: "Federation of African Medical Students' Associations",
  },
];

const AboutSponsors = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer with continuous re-triggering
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility based on intersection
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.15, // Trigger when 15% is visible
        rootMargin: "0px" // No margin for precise triggering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup - don't disconnect, allow re-triggering
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`py-5 ${isVisible ? 'is-visible' : ''}`} 
      id="sponsors" 
      ref={sectionRef}
      aria-labelledby="sponsors-title"
    >
      <div className="container">
        <h2 id="sponsors-title" className="section-title mb-5 text-center">
          STRATEGIC PATNERS & AFFILIATIONS
        </h2>

        <div className="row g-5 justify-content-center align-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="col-6 col-md-3 text-center sponsor-frame"
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="frame-inner"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  className="img-fluid sponsor-logo"
                  loading="lazy"
                />
                <div className="frame-glow"></div>
              </a>

              {/* Optional name below logo */}
              <p className="small mt-3 fw-semibold">{sponsor.name}</p>
            </div>
          ))}
        </div>

       </div>
    </section>
  );
};

export default AboutSponsors;