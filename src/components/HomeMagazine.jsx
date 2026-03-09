import React from "react";
import "./../styles/home_magazine.css"; // Make sure to create this CSS or integrate into main CSS

const HomeMagazine = () => {
  return (
    <section className="py-5" id="magazine" aria-labelledby="magazine-title">
      <div className="container">
        <div className="magazine-cardl">
          <div className="row align-items-center g-5">
            
            {/* Text Column */}
            <div className="col-lg-6 fade-item delay-2">
              <h2 id="magazine-title" className="section-titlel mb-4">
                <span className="icon-book"></span> AKUMS MAGAZINE
              </h2>
              <p className="magazine-description fade-item delay-3">
                The AKUMS Magazine was conceived in October 2025 by the executive committee of the Association of Kenyatta University Medical Students (AKUMS). </p>
              <p className="magazine-description fade-item delay-4">
                Recognizing the absence of a dedicated platform for medical student voices at Kenyatta University, the AKUMS leadership initiated this publication to address a critical gap in medical education discourse. </p>
              <p className="magazine-description fade-item delay-5">
                Since conception, the magazine has successfully launched a call for submissions and assembled a comprehensive editorial team of 14 members across all content verticals. 

The inaugural issue is scheduled for publication in February 2026</p>
              
              {/* Inspirational Badge */}
              <div className="magazine-badge fade-item delay-6">
                <em>“Stories that heal and inspire.”</em>
              </div>
              
              <a 
                href="/magazineabout" 
                className="btn btn-primary fade-item delay-7 mt-4" 
                aria-label="Explore AKUMS Magazine"
              >
                Read More
              </a>
            </div>

            {/* Image Column */}
            <div className="col-lg-6 text-center fade-item delay-2">
              <div className="magazine-img-wrapper">
                <img 
                  src="/images/magazinefront2.jpeg" 
                  alt="AKUMS Magazine Cover - Stories of Medical Innovation" 
                  className="img-fluid magazine-img" 
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
