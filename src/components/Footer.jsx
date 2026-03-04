// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-section py-5 bg-dark text-white">
      <Container>
        <Row className="g-4">

          {/* About */}
          <Col md={4}>
            <h5 className="footer-title mb-3">ABOUT AKUMS</h5>
            <p className="small footer-p">
              The Association of Kenyatta University Medical Students (AKUMS) fosters leadership,
              community service, and academic excellence among future healthcare professionals.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="footer-title mb-3">QUICK LINKS</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>

              {/* React-Bootstrap Dropdown */}
              <li className="nav-item">
                <NavDropdown title="Magazine" id="magazineDropdown" menuVariant="dark">
                  <NavDropdown.Item href="/magazineabout">About</NavDropdown.Item>
                  <NavDropdown.Item href="/magazineissue">Issue</NavDropdown.Item>
                  <NavDropdown.Item href="/magazineleaders">Team</NavDropdown.Item>
                  <NavDropdown.Item href="/magazinesubmission">Submission</NavDropdown.Item>
                </NavDropdown>
              </li>

              <li><a href="/alumni">Alumni</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </Col>

          {/* Contact & Socials */}
          <Col md={4}>
            <h5 className="footer-title mb-3">CONTACT & SOCIALS</h5>
            <p className="small footer-p mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Kenyatta University, School of Health Sciences
            </p>
            <p className="small footer-p mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              Akumssecretariat@gmail.com
            </p>
            <p className="small footer-p mb-3">
              <i className="bi bi-telephone-fill me-2"></i>
              -
            </p>

            <div className="social-icons d-flex gap-3">
              <a href="https://www.instagram.com/a.k.u.m.s_ku?igsh=MXdmbTVldjl4MmJxZg==" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="https://www.tiktok.com/@akums.ku?_r=1&_t=ZM-91aoCHecs04" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-tiktok"></i>
              </a>

              <a href="https://x.com/Akums_KU?s=09" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="https://www.linkedin.com/company/the-association-of-kenyatta-university-medical-students/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://linktr.ee/AKUMS.KU" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.993 2a1.3 1.3 0 0 1 1.3 1.3v3.71l2.63-2.63a1.3 1.3 0 1 1 1.84 1.84l-4.47 4.47v10.01a1.3 1.3 0 1 1-2.6 0V10.7L6.23 6.05a1.3 1.3 0 0 1 1.84-1.84l2.63 2.63V3.3A1.3 1.3 0 0 1 11.993 2z"/>
                </svg>
              </a>

              <a href="mailto:Akumssecretariat@gmail.com">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </Col>

        </Row>

        <hr className="my-4 border-light" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="footer-p mb-2 mb-md-0">
            © 2026 Association of Kenyatta University Medical Students (AKUMS). All rights reserved.
          </p>
          <p className="mb-0">
            Created & designed by{" "}
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
              AKUMS-ICT TEAM
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}