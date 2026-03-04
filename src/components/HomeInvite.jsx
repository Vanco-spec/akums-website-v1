// src/components/SponsorInvite.jsx
import React from "react";
import "../styles/home_invite.css"; // make sure your CSS is separate

function SponsorInvite() {
  return (
    <section id="sponsor-invite" aria-labelledby="invite-title">
      <div className="sponsor-container">
        <div className="sponsor-box">

          {/* Main Invite */}
          <div className="invite-header">
            <h2 id="invite-title">Support Our Next Event</h2>
            <p className="invite-subtitle">
              Partner with AKUMS to empower student doctors, support health innovation, and elevate impactful community initiatives.  
              Your sponsorship helps us host trainings, outreach programs, and student-led projects.
            </p>
          </div>

          {/* Why Partner? Benefits */}
          <div className="benefits-list">
            <h3>Why Partner with Us?</h3>
            <ul>
              <li><i className="bi bi-check-circle-fill"></i> Boost your brand's visibility in the medical community</li>
              <li><i className="bi bi-check-circle-fill"></i> Contribute to life-changing health initiatives</li>
              <li><i className="bi bi-check-circle-fill"></i> Network with future healthcare leaders</li>
              <li><i className="bi bi-check-circle-fill"></i> Exclusive recognition in our events and publications</li>
            </ul>
          </div>

          {/* Testimonial Badge */}
          <div className="testimonial-badge">
            <em>“Partnering with AKUMS transformed our outreach—highly recommended!”</em>
            <span>- Previous Sponsor</span>
          </div>

          {/* Sponsor Button */}
          <div className="sponsor-actions">
            <a 
              href="mailto:akumsorganization@gmail.com" 
              className="btn primary"
              aria-label="Become a sponsor and receive package"
            >
              <i className="bi bi-handshake"></i> Become a Sponsor & Receive Package details
            </a>
          </div>

          <hr className="divider" />

          {/* Volunteer Section */}
          <div className="volunteer-section">
            <h3 className="volunteer-title">
              <i className="bi bi-heart-fill"></i> Want to Volunteer?
            </h3>
            <p className="volunteer-text">
              We welcome passionate students who wish to support event planning, logistics, community health drives, and creative projects.
            </p>
            <a 
              href="mailto:akumsorganization@gmail.com" 
              className="btn volunteer-btn" 
              aria-label="Contact to volunteer" 
              id="volunteer-btn"
            >
              <i className="bi bi-envelope"></i> Contact Us to Volunteer
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SponsorInvite;
