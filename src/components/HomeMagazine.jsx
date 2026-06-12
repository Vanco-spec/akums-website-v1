import React, { useEffect, useRef } from "react";
import "./../styles/home_magazine.css";

const HomeMagazine = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".mag-fade");
    if (!items?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="magazine" aria-labelledby="magazine-title" ref={sectionRef}>
      <div className="container">
        <div className="magazine-cardl">
          <div className="row align-items-center g-4">

            {/* Text Column */}
            <div className="col-lg-6 mag-fade delay-1">
              <h2 id="magazine-title" className="section-titlel mb-4">
                AKUMS MAGAZINE
              </h2>
              <p className="magazine-description mag-fade delay-2">
                The AKUMS Magazine was conceived in October 2025 by the executive committee of the
                Association of Kenyatta University Medical Students (AKUMS).
              </p>
              <p className="magazine-description mag-fade delay-3">
                Recognizing the absence of a dedicated platform for medical student voices at
                Kenyatta University, the AKUMS leadership initiated this publication to address a
                critical gap in medical education discourse.
              </p>
              <p className="magazine-description mag-fade delay-4">
                Since conception, the magazine has successfully launched a call for submissions and
                assembled a comprehensive editorial team of 14 members across all content verticals.
                The inaugural issue is scheduled for publication in February 2026.
              </p>

              
              <a
                href="/magazineabout"
                className="magazine-read-btn mt-4"
                aria-label="Explore AKUMS Magazine"
              >
                Read More
              </a>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 text-center mag-fade delay-2">
              <div className="magazine-img-wrapper">
                <img
                  src="/images/magazinefront2.jpeg"
                  alt="AKUMS Magazine Cover - Stories of Medical Innovation"
                  className="img-fluid magazine-img"
                  width="500"
                  height="650"
                  loading="lazy"
                />
                <div className="img-overlay">
                  <span className="overlay-text">Latest Edition</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMagazine;