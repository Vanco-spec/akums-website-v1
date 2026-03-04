import React from "react";

const AboutConnect = () => {
  return (
    <section className="connect-section py-5 text-center text-white">
      <div className="container">

        <h2 className="mb-4 section-title text-center">CONNECT WITH AKUMS</h2>

        <p className="lead mb-4">
          Have questions, ideas, or partnership inquiries?
          We’d love to hear from you! Stay connected with the{" "}
          <strong>
            Association of Kenyatta University Medical Students (AKUMS)
          </strong>{" "}
          through our platforms.
        </p>

        {/* ================= CONTACT CARDS ================= */}
        <div className="row justify-content-center mb-5">

          {/* Email */}
          <div className="col-md-4 mb-4">
            <div className="contact-card p-4 rounded-4 shadow-sm bg-light text-dark h-100">
              <i className="bi bi-envelope-fill contact-icon text-primary mb-3"></i>
              <h5 className="fw-bold mb-2">Email Us</h5>
              <p className="mb-3">For general inquiries or feedback</p>
              <a
                href="mailto:info.akums@gmail.com"
                className="btn btn-outline-primary btn-sm"
              >
                info.akums@gmail.com
              </a>
            </div>
          </div>

          {/* Sponsorship */}
          <div className="col-md-4 mb-4">
            <div className="contact-card p-4 rounded-4 shadow-sm bg-light text-dark h-100">
              <i className="bi bi-people-fill contact-icon text-success mb-3"></i>
              <h5 className="fw-bold mb-2">
                Sponsorships & Partnerships
              </h5>
              <p className="mb-3">
                Interested in supporting or collaborating with AKUMS?
              </p>
              <a
                href="mailto:sponsorships.akums@gmail.com"
                className="btn btn-outline-success btn-sm"
              >
                sponsorships.akums@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-md-4 mb-4">
            <div className="contact-card p-4 rounded-4 shadow-sm bg-light text-dark h-100">
              <i className="bi bi-geo-alt-fill contact-icon text-danger mb-3"></i>
              <h5 className="fw-bold mb-2">Visit Us</h5>
              <p className="mb-3">
                School of Medicine, Kenyatta University, Nairobi
              </p>
              <a
                href="https://maps.google.com/?q=Kenyatta+University+School+of+Medicine"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-danger btn-sm"
              >
                View on Map
              </a>
            </div>
          </div>

        </div>

        {/* ================= SOCIAL MEDIA ================= */}
        <h5 className="fw-bold mb-3">Follow Us</h5>

      <div className="social-links d-flex justify-content-center gap-4 mb-3">
        <a
          href="https://www.instagram.com/a.k.u.m.s_ku"
          target="_blank"
          rel="noopener noreferrer"
          className="animate"
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a
          href="https://www.tiktok.com/@akums.ku"
          target="_blank"
          rel="noopener noreferrer"
          className="animate"
        >
          <i className="bi bi-tiktok"></i>
        </a>

        <a
          href="https://x.com/Akums_KU"
          target="_blank"
          rel="noopener noreferrer"
          className="animate"
        >
          <i className="bi bi-twitter-x"></i>
        </a>

        <a
          href="https://www.linkedin.com/company/the-association-of-kenyatta-university-medical-students/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        <a
          href="https://linktr.ee/AKUMS.KU"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linktree"
          className="animate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11.993 2a1.3 1.3 0 0 1 1.3 1.3v3.71l2.63-2.63a1.3 1.3 0 1 1 1.84 1.84l-4.47 4.47v10.01a1.3 1.3 0 1 1-2.6 0V10.7L6.23 6.05a1.3 1.3 0 0 1 1.84-1.84l2.63 2.63V3.3A1.3 1.3 0 0 1 11.993 2z"/>
          </svg>
        </a>
      </div>

        <p className="mt-3 small connect-footer-text">
          Stay informed, inspired, and involved — together we advance the future of medicine.
        </p>

      </div>
    </section>
  );
};

export default AboutConnect;