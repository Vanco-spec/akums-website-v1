// src/components/Submission.jsx
import React from "react";
import "../styles/submissions.css";

export default function Submission() {
  return (
    <section className="magazine-guidelines py-5 position-relative overflow-hidden">
      <div className="container">

        {/* Floating Accent Circle */}
        <div className="bg-accent-circle"></div>

        {/* Hero / Title */}
        <h2 className="section-title text-center mb-4">
          Submit an Article to the AKUMS Magazine
        </h2>
        <p className="lead text-center mb-5">
          We welcome contributions from students, alumni, and faculty that reflect the vibrant spirit of the medical community.  
          Share your insights, experiences, or research — your voice matters!
        </p>

        {/* Guidelines Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="guidelines-card p-4 p-md-5 rounded-4 shadow-lg bg-white">

              <h4 className="fw-bold mb-3 text-primary d-flex align-items-center">
                <i className="bi bi-journal-text me-2"></i>
                Submission Guidelines
              </h4>

              <ul className="list-unstyled mb-4">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Articles should be between <strong>500–1200 words</strong> and written in clear, engaging English.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Include your <strong>full name, year of study or graduation, and a short bio</strong> (2–3 lines).
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Topics may include <strong>medical education, research highlights, health advocacy, student life, or personal reflections</strong>.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Attach relevant <strong>high-quality photos or graphics</strong> if available (ensure you have permission to use them).
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Submissions must be original and not previously published elsewhere.
                </li>
              </ul>

              {/* Contact */}
              <div className="text-center mt-4">
                <p className="fw-semibold mb-2">📧 Send your article to:</p>
                <p>
                  <a
                    href="mailto:akumsmagazine@gmail.com"
                    className="text-decoration-none fw-bold text-primary"
                  >
                    akumsmagazine@gmail.com
                  </a>
                </p>

               </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}